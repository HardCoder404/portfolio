// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Abhijit Agarwal",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQFfLqrOGZL5EQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1737100479061?e=1738962000&v=beta&t=pAlPFcDWg0x-HVmyFV_jT3umThVFqXcwpANU3vQbDyI",
    designation: "NEXT JS | Node | TypeScript | MongoDB | Payment Gateway",
    view: "Hey everyone! I want to take a moment to recommend Prince Raj for any React.js or Next.js opportunities. I had the pleasure of working with him on multiple projects, where he showcased a strong understanding of React.js and Next.js concepts while delivering high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was truly inspiring. Prince is a reliable and dedicated team member who would be a great asset to any React.js/Next.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/agarwalabhijit/",
  },
  {
    id: 1,
    name: "Sathya Sachi Paira",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEpZirwr4dz6A/profile-displayphoto-shrink_400_400/B56ZOlK7jdG8Ak-/0/1733642927506?e=1743638400&v=beta&t=lGDJlyd0Uf1YTQyckdTAiWsNttBWUIMY_jlq1xyKn3I",
    designation:
      "NEXT JS | React Native | PostgreSQL | AWS | Docker | Firebase",
    view: "I had the privilege of working alongside Prince on multiple industrial projects, and I must say his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at SecWebXperts, where Prince's professionalism and attention to detail were remarkable. I wholeheartedly endorse Prince for any opportunity that requires a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/sathya-sachi-paira32281178/",
  },
  {
    id: 2,
    name: "Ayush Kumar Tiwari",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHmoEerFTsLUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707836320480?e=1743638400&v=beta&t=OMBcPbk7eE4pvGxtJxXoSkVqw3zBH65Nioszt6c1D6Y",
    designation: "MERN | JavaScript | Tailwind | Sass | Bootstrap",
    view: "I wholeheartedly recommend Prince as a talented React frontend developer with an exceptional eye for responsiveness. His proficiency in Node.js further enhances his capabilities, enabling him to build robust and scalable applications. Prince’s attention to detail, problem-solving skills, and commitment to delivering outstanding results make him a valuable asset to any development team.",
    linkednURL: "https://www.linkedin.com/in/itsayu/",
  },
  {
    id: 3,
    name: "Deepanshu Kamboj",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE01pgPOQ8MTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710600285794?e=1743638400&v=beta&t=UCfjh3E1QtHz5tRcIFUga70L02dLEaHhaV2Ck6u7vlQ",
    designation:
      "React JS | Node | TypeScript | AWS | React Native | PostgreSQL ",
    view: "I highly recommend Prince Raj for web frontend development roles. His expertise in React.js and Next.js, combined with his professionalism and dedication, make him an invaluable asset to any team. Truly top-notch! Highly recommended! 🌟💪",
    linkednURL: "https://www.linkedin.com/in/deepanshu-kamboj-5aa74019a/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
