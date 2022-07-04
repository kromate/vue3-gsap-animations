<template>
	<div class="center h-screen w-screen bg">
		<div class="relative center text-white">
			<img
				src="../../assets/images/pageZero/border.svg"
				alt="border"
				class="logo-border absolute w-40"
			/>

			<span class="text-7xl p-10 font-semibold">K</span>
		</div>
	</div>
</template>

<script setup lang="ts">
for(let i= 0; i<=100; i++){
	console.log(`${i}% {background-image: linear-gradient(90deg, #000000 ${i}%, #958e69 0%);}`)
}
</script>

<style scoped>
.bg {
	background-color: #000000;
	/* background-image: linear-gradient(90deg, #000000 1%, #958e69 0%); */
    animation: flow 3s 1;
}

.logo-border {
	animation: spin 3s 1;

}

@keyframes flow {
0% {background-image: linear-gradient(90deg, #000000 0%, #958e69 0%);}
1% {background-image: linear-gradient(90deg, #000000 1%, #958e69 0%);}
2% {background-image: linear-gradient(90deg, #000000 2%, #958e69 0%);}
3% {background-image: linear-gradient(90deg, #000000 3%, #958e69 0%);}
4% {background-image: linear-gradient(90deg, #000000 4%, #958e69 0%);}
5% {background-image: linear-gradient(90deg, #000000 5%, #958e69 0%);}
6% {background-image: linear-gradient(90deg, #000000 6%, #958e69 0%);}
7% {background-image: linear-gradient(90deg, #000000 7%, #958e69 0%);}
8% {background-image: linear-gradient(90deg, #000000 8%, #958e69 0%);}
9% {background-image: linear-gradient(90deg, #000000 9%, #958e69 0%);}
10% {background-image: linear-gradient(90deg, #000000 10%, #958e69 0%);}
11% {background-image: linear-gradient(90deg, #000000 11%, #958e69 0%);}
12% {background-image: linear-gradient(90deg, #000000 12%, #958e69 0%);}
13% {background-image: linear-gradient(90deg, #000000 13%, #958e69 0%);}
14% {background-image: linear-gradient(90deg, #000000 14%, #958e69 0%);}
15% {background-image: linear-gradient(90deg, #000000 15%, #958e69 0%);}
16% {background-image: linear-gradient(90deg, #000000 16%, #958e69 0%);}
17% {background-image: linear-gradient(90deg, #000000 17%, #958e69 0%);}
18% {background-image: linear-gradient(90deg, #000000 18%, #958e69 0%);}
19% {background-image: linear-gradient(90deg, #000000 19%, #958e69 0%);}
20% {background-image: linear-gradient(90deg, #000000 20%, #958e69 0%);}
21% {background-image: linear-gradient(90deg, #000000 21%, #958e69 0%);}
22% {background-image: linear-gradient(90deg, #000000 22%, #958e69 0%);}
23% {background-image: linear-gradient(90deg, #000000 23%, #958e69 0%);}
24% {background-image: linear-gradient(90deg, #000000 24%, #958e69 0%);}
25% {background-image: linear-gradient(90deg, #000000 25%, #958e69 0%);}
26% {background-image: linear-gradient(90deg, #000000 26%, #958e69 0%);}
27% {background-image: linear-gradient(90deg, #000000 27%, #958e69 0%);}
28% {background-image: linear-gradient(90deg, #000000 28%, #958e69 0%);}
29% {background-image: linear-gradient(90deg, #000000 29%, #958e69 0%);}
30% {background-image: linear-gradient(90deg, #000000 30%, #958e69 0%);}
31% {background-image: linear-gradient(90deg, #000000 31%, #958e69 0%);}
32% {background-image: linear-gradient(90deg, #000000 32%, #958e69 0%);}
33% {background-image: linear-gradient(90deg, #000000 33%, #958e69 0%);}
34% {background-image: linear-gradient(90deg, #000000 34%, #958e69 0%);}
35% {background-image: linear-gradient(90deg, #000000 35%, #958e69 0%);}
36% {background-image: linear-gradient(90deg, #000000 36%, #958e69 0%);}
37% {background-image: linear-gradient(90deg, #000000 37%, #958e69 0%);}
38% {background-image: linear-gradient(90deg, #000000 38%, #958e69 0%);}
39% {background-image: linear-gradient(90deg, #000000 39%, #958e69 0%);}
40% {background-image: linear-gradient(90deg, #000000 40%, #958e69 0%);}
41% {background-image: linear-gradient(90deg, #000000 41%, #958e69 0%);}
42% {background-image: linear-gradient(90deg, #000000 42%, #958e69 0%);}
43% {background-image: linear-gradient(90deg, #000000 43%, #958e69 0%);}
44% {background-image: linear-gradient(90deg, #000000 44%, #958e69 0%);}
45% {background-image: linear-gradient(90deg, #000000 45%, #958e69 0%);}
46% {background-image: linear-gradient(90deg, #000000 46%, #958e69 0%);}
47% {background-image: linear-gradient(90deg, #000000 47%, #958e69 0%);}
48% {background-image: linear-gradient(90deg, #000000 48%, #958e69 0%);}
49% {background-image: linear-gradient(90deg, #000000 49%, #958e69 0%);}
50% {background-image: linear-gradient(90deg, #000000 50%, #958e69 0%);}
51% {background-image: linear-gradient(90deg, #000000 51%, #958e69 0%);}
52% {background-image: linear-gradient(90deg, #000000 52%, #958e69 0%);}
53% {background-image: linear-gradient(90deg, #000000 53%, #958e69 0%);}
54% {background-image: linear-gradient(90deg, #000000 54%, #958e69 0%);}
55% {background-image: linear-gradient(90deg, #000000 55%, #958e69 0%);}
56% {background-image: linear-gradient(90deg, #000000 56%, #958e69 0%);}
57% {background-image: linear-gradient(90deg, #000000 57%, #958e69 0%);}
58% {background-image: linear-gradient(90deg, #000000 58%, #958e69 0%);}
59% {background-image: linear-gradient(90deg, #000000 59%, #958e69 0%);}
60% {background-image: linear-gradient(90deg, #000000 60%, #958e69 0%);}
61% {background-image: linear-gradient(90deg, #000000 61%, #958e69 0%);}
62% {background-image: linear-gradient(90deg, #000000 62%, #958e69 0%);}
63% {background-image: linear-gradient(90deg, #000000 63%, #958e69 0%);}
64% {background-image: linear-gradient(90deg, #000000 64%, #958e69 0%);}
65% {background-image: linear-gradient(90deg, #000000 65%, #958e69 0%);}
66% {background-image: linear-gradient(90deg, #000000 66%, #958e69 0%);}
67% {background-image: linear-gradient(90deg, #000000 67%, #958e69 0%);}
68% {background-image: linear-gradient(90deg, #000000 68%, #958e69 0%);}
69% {background-image: linear-gradient(90deg, #000000 69%, #958e69 0%);}
70% {background-image: linear-gradient(90deg, #000000 70%, #958e69 0%);}
71% {background-image: linear-gradient(90deg, #000000 71%, #958e69 0%);}
72% {background-image: linear-gradient(90deg, #000000 72%, #958e69 0%);}
73% {background-image: linear-gradient(90deg, #000000 73%, #958e69 0%);}
74% {background-image: linear-gradient(90deg, #000000 74%, #958e69 0%);}
75% {background-image: linear-gradient(90deg, #000000 75%, #958e69 0%);}
76% {background-image: linear-gradient(90deg, #000000 76%, #958e69 0%);}
77% {background-image: linear-gradient(90deg, #000000 77%, #958e69 0%);}
78% {background-image: linear-gradient(90deg, #000000 78%, #958e69 0%);}
79% {background-image: linear-gradient(90deg, #000000 79%, #958e69 0%);}
80% {background-image: linear-gradient(90deg, #000000 80%, #958e69 0%);}
81% {background-image: linear-gradient(90deg, #000000 81%, #958e69 0%);}
82% {background-image: linear-gradient(90deg, #000000 82%, #958e69 0%);}
83% {background-image: linear-gradient(90deg, #000000 83%, #958e69 0%);}
84% {background-image: linear-gradient(90deg, #000000 84%, #958e69 0%);}
85% {background-image: linear-gradient(90deg, #000000 85%, #958e69 0%);}
86% {background-image: linear-gradient(90deg, #000000 86%, #958e69 0%);}
87% {background-image: linear-gradient(90deg, #000000 87%, #958e69 0%);}
88% {background-image: linear-gradient(90deg, #000000 88%, #958e69 0%);}
89% {background-image: linear-gradient(90deg, #000000 89%, #958e69 0%);}
90% {background-image: linear-gradient(90deg, #000000 90%, #958e69 0%);}
91% {background-image: linear-gradient(90deg, #000000 91%, #958e69 0%);}
92% {background-image: linear-gradient(90deg, #000000 92%, #958e69 0%);}
93% {background-image: linear-gradient(90deg, #000000 93%, #958e69 0%);}
94% {background-image: linear-gradient(90deg, #000000 94%, #958e69 0%);}
95% {background-image: linear-gradient(90deg, #000000 95%, #958e69 0%);}
96% {background-image: linear-gradient(90deg, #000000 96%, #958e69 0%);}
97% {background-image: linear-gradient(90deg, #000000 97%, #958e69 0%);}
98% {background-image: linear-gradient(90deg, #000000 98%, #958e69 0%);}
99% {background-image: linear-gradient(90deg, #000000 99%, #958e69 0%);}
100% {background-image: linear-gradient(90deg, #000000 100%, #958e69 0%);}
}
@keyframes spin {
	0% {
		transform: rotate(0deg) scale(1);
	}
    50%{
        transform: rotate(180deg) scale(1.5);
    }
    100%{
        transform: rotate(360deg) scale(1);
    }
}
</style>


