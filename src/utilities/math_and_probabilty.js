export default {
  name: "Math and Probability",
  data: [
    {
      id: 0,
      name: "Logarithms",
      language: "js",
      tabs: [
        {
          image_src: "https://www.cheatography.com/uploads/cddc_1456260419_clip_image001[3].png",
          name: "Question",
          data:
`Source: https://www.interviewcake.com/article/java/logarithms

•	Application: running time of binary search: 
  ◦	how many times must we divide our original array size (n) in half until we
    get down to 1? 
    ▪	n * ½ * ½ * ½ … = 1 
    ▪	n * (½)x = 1 
    ▪	n = 2x 
    ▪	log2(n) = log2(2x) 
    ▪	x = log2(n) 
  ◦	So binary search has a O(log2n) running time. 
•	Application: comparison-based sorting 
  ◦	Best worst-case runtime: O(n*log2n) 
•	The height of a binary tree: h = log2(n + 1) 
•	Note: computer science, log(n) generally means log2(n), lg(n) also means
  log2(n) 
`
        }
      ]
    },
    {
      id: 1,
      name: "Complex Number Representation",
      language: "js",
      tabs: [
        {
          image_source: "https://images.slideplayer.com/39/10873962/slides/slide_3.jpg",
          name: "Question",
          data:
`Source:

`
        }
      ]
    }
  ]
};
