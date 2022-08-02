const getPath = (page: string[]) =>
	page
		.map((path) => {
			if (path === 'index') return ''
			if (path === '~') return ':pathMatch(.*)*'
			if (path.startsWith('^')) path = path.replace('^', '')
			if (path.startsWith('_')) path = path.replace('_', ':')
			return path
		})
		.join('/')
		.replace(new RegExp('///', 'g'), '/')
		.replace(new RegExp('//', 'g'), '/')

const getPageName = (path: string) => {
	const originPath = path.split('/')

	const name = originPath.reduce((total, curr) => {
		return total + curr
	})
	return name
}
const makeRoute = async (page: string[], importFn: () => Promise<any>) => {
	const path = '/' + getPath(page)
	const { default: component } = await importFn()
	const { displayName = '', middlewares = [], name = '' } = component

	return {
		path,
		component,
		name: getPageName(path),
		meta: { middlewares, displayName },
	}
}

const allPages = Object.entries(import.meta.glob('../views/**/*.vue'))
	.map(([key, importFn]) => ({
		path: key.slice(9).replace('.vue', '').split('/'),
		importFn,
	}))
	.map(({ path, importFn }) => {
		let parent = null as null | string
		const nestedIndex = path.findIndex((p) => p.startsWith('^'))
		if (nestedIndex > -1) parent = getPath(path.slice(0, nestedIndex))
		return { parent, path, importFn }
	})

const nestedPages = allPages.filter((page) => page.parent)

export const routes = allPages
	.filter((page) => !page.parent)
	.map(async (page) => {
		const path = getPath(page.path)
		const childrenPages = nestedPages.filter((p) => p.parent === path)

		const route = await makeRoute(page.path, page.importFn)
		const children = await Promise.all(
			childrenPages.map((page) => makeRoute(page.path, page.importFn))
		)

		return { ...route, children }
	})
