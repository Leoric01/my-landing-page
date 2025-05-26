const projects = [
  {
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This is the site you're currently viewing — a fully responsive personal portfolio built using modern frontend technologies. It includes animations, sliders, and dynamic content such as skills, experience, and project previews.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    thumbnail: "/assets/work/thumb-1.png",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/dqwkulwsogn3v69mnzih.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252223/spohod7kh2v0vaqqttjq.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/lfjagpueygqd21twfefd.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/u4848hugzcoqck1oeg1s.jpg",
      "/assets/work/thumb-1.png",
    ],
    live: "https://my-landing-page-snowy-nu.vercel.app/",
    github: "https://github.com/Leoric01/my-landing-page",
  },
  {
    category: "full stack / backend and frontend",
    title: "Book Network BACKEND",
    description:
      "Was supposed to be a social network for book users. Features were - registering book, scoring, reviews, ranking, adding visible books to wishlist, borrowing books, and more. The project was abandoned due to lack of time and i was struggling with angular frontend. Backend is in java springboot and is working fine, frontend deffinitely has some issues even tho its usable. Started that to test angular, i liked it but implementing features and fixing bugs was too time consuming for me. I will probably not return to this project in the future.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "JPA / Hibernate" },
      { name: "JWT security" },
    ],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/r3oljyl6f6wkgt1rzuje.jpg",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/vqppsvxnea3bvloodenc.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/kq3vhyuc0emavk7vcpty.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/o1d4pflul7jyelqwnuzv.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/rfcjayjvtlm1qn9dxg8p.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/g24y0im2ptv2ez4miwu3.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/knydhvq0m5sfhmdlgcag.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/m8kadweokyqu4rem0pq4.jpg",
    ],
    live: "https://book-network-be-production.up.railway.app/api/v1/health/api",
    github: "https://github.com/Leoric01/Book-Network-BE",
  },
  {
    category: "full stack / backend and frontend",
    title: "Book Network FRONT END",
    description:
      "Was supposed to be a social network for book users. Features were - registering book, scoring, reviews, ranking, adding visible books to wishlist, borrowing books, and more. The project was abandoned due to lack of time and i was struggling with angular frontend. Backend is in java springboot and is working fine, frontend deffinitely has some issues even tho its usable. Started that to test angular, i liked it but implementing features and fixing bugs was too time consuming for me. I will probably not return to this project in the future.",
    stack: [{ name: "JavaScript" }, { name: "Angular" }, { name: "JWT security" }, { name: "Interceptors" }],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/k8xpxuutcktyhmlez7us.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/ogphtifxowiz4c57ilzg.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/oyfq6rgfkcsfrc3p8viy.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
    ],
    live: "",
    github: "https://github.com/Leoric01/Book-Network-FE",
  },
  {
    category: "Backend / Fullstack",
    title: "Bank Interview TEST",
    description:
      "A REST API implemented in Java and Spring Boot for a bank interview task. Full task is in github link in readme. The service includes three functionalities: text transformation that reverses input text with vowel capitalization and whitespace normalization; numeric processing involving digit shifting, multiplication, deletion, and division based on specified rules; and a simple ticketing system with endpoints to generate, retrieve, and delete tickets. A quick frontend prototype was built using Thymeleaf.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Thymeleaf" },
      { name: "REST API" },
      { name: "H2 Database" },
    ],
    thumbnail: "/assets/work/moneta.png",
    images: ["/assets/work/moneta.png"],
    live: "https://successive-veronica-urb92-5cb11d87.koyeb.app/ui",
    github: "https://github.com/Leoric01/moneta-entry-exam",
  },
  {
    category: "game",
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with Java using Swing and JPanel. This simple desktop application features a graphical interface, basic game logic, and player turn tracking. It was developed to practice GUI design, event handling, and object-oriented principles in Java.",
    stack: [{ name: "Java" }, { name: "Swing / JPanel" }],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748258600/ky4a96rcfmffkt3gfgy4.jpg",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748258601/caa8hdobae76lwfxm3ub.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748258601/dwxjqxh3qhoglouallal.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748258600/ky4a96rcfmffkt3gfgy4.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748258600/puzityppmltu7elvymem.jpg",
    ],
    live: "",
    github: "https://github.com/Leoric01/TicTacToeGame",
  },
  {
    category: "game",
    title: "Snake Game",
    description:
      "A simple version of the classic Snake game implemented in Java using Swing (JPanel). The game runs as a desktop application and was created to explore basic graphics, game loop timing, and collision logic in Java.",
    stack: [{ name: "Java" }, { name: "Swing / JPanel" }],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251246/cmsrrqp1mh0itsfvh1c3.png",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251247/dltfmlazy3sudr0h5gqe.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251247/sl9jgdpggfqk0jdona0m.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251246/cmsrrqp1mh0itsfvh1c3.png",
    ],
    live: "",
    github: "https://github.com/Leoric01/SnakeGame",
  },
  {
    category: "terminal app",
    title: "TTCExercise",
    description:
      "A small command-line application written as part of a coding challenge for job interview. The app reads a sequence of numbers either from a file or from standard input. Based on the count of numbers (even or odd), it filters and prints only even or odd numbers respectively. Input/output behavior is configurable via command-line arguments.",
    stack: [{ name: "Java" }, { name: "File I/O" }],
    thumbnail: "/assets/work/consoleapp.jpg",
    images: [],
    live: "",
    github: "https://github.com/Leoric01/TTCExercise",
  },
];
export default projects;
