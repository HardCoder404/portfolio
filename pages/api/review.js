const review = [
  {
    id: 0,
    clientName: "Mustafash",
    clientLocation: "Egypt",
    clientSource: "Fiverr",
    clientReview:
      "It’s always a pleasure working with him. He completes tasks efficiently and goes above and beyond expectations. His deep knowledge of his work is evident, and I look forward to our next collaboration."  },
  {
    id: 2,
    clientName: "Melissabrown255",
    clientLocation: "United States",
    clientSource: "Fiverr",
    clientReview:
      "He is an excellent communicator and an experienced web developer. It was a great experience working with him. ",
  },
  {
    id: 3,
    clientName: "Jake Corry",
    clientLocation: "Germany",
    clientSource: "Fiverr",
    clientReview:
      "Prince is extremely knowledgeable and helpful. He has an in-depth understanding of web app development and a strong grasp of various technologies and frameworks. His expertise is truly impressive, and I hope to have the opportunity to work with him again.",
  },
  {
    id: 4,
    clientName: "Blaise Labriola",
    clientLocation: "France",
    clientSource: "Fiverr",
    clientReview:
      "I have worked with Prince, and he is a highly professional and excellent software developer. I admire his development speed and the quality of his work when given an assignment.",
  },
];
export default function handler(req, res) {
  res.status(200).json(review);
}
