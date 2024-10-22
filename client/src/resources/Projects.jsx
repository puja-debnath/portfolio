import image1 from "../assets/pathfing.webp"
import image2 from "../assets/sorting_merge.png";

export const Projects = [
  {
    id: "1",
    title: "Pathfinding Visualizer",
    image: image1,
    technologies: ["JavaScript", "React JS", "Tailwind CSS"],
    algorithms: ["Dijkstra's"],
    description:
      "The Pathfinding Visualizer is an interactive tool designed to help users understand and visualize various pathfinding algorithms. It allows users to create custom mazes and obstacles, select different algorithms, and observe how these algorithms find the shortest path between two points. The visualizer supports multiple algorithms, including Dijkstra's Algorithm, A*, Breadth-First Search (BFS), and Depth-First Search (DFS), providing a hands-on learning experience",
    githublink: "https://github.com/puja-debnath/Pathfinding-Visualizer",
  },
  {
    id: "2",
    title: "Visualization of Sorting Algorithms",
    image: image2,
    technologies: ["JavaScript", "React JS", "Tailwind CSS"],
    algorithms: ["Merge Sort", "Bubble Sort"],
    description:
      "The Visualization of Sorting Algorithms is an interactive tool designed to visualizes various sorting algorithms, including Bubble Sort, Quick Sort, Merge Sort, and more. This interactive tool allows users to observe how different algorithms sort an array of numbers step-by-step, providing a clear understanding of their mechanics and efficiency.",
    githublink: "https://github.com/puja-debnath/Visualization-of-Sorting-algo",
  },
  {
    id: "3",
    title: "Password generator",
    image: "",
    technologies: ["Reactjs", "Tailwind CSS", "javascript"],
    description:
      "Password Generator is a web-based tool designed to create strong, random passwords to enhance online security. It utilizes advanced algorithms to generate complex combinations of uppercase and lowercase letters, numbers, and special characters, ensuring that the passwords are difficult to guess or crack. Users can customize the length and character types of the generated passwords, making it adaptable for various security needs.",
    githublink: "https://github.com/puja-debnath/password-Gen",
  },
  {
    id: "4",
    title: "Personal Portfolio",
    image: "",
    technologies: ["javaScript", "React js", "Tailwind", "Node js", "MongoDB"],
    description: `This portfolio showcases my projects and skills as a Full Stack Developer utilizing the MERN stack (MongoDB, Express.js, React, Node.js). The application features a dynamic interface that allows users to explore various projects I've completed, each with detailed descriptions and technologies used.
            Frontend:
            React: For building the user interface.
            Tailwind CSS: For styling and responsive design.
          Backend:
         Node.js: For server-side logic.
           Express.js: For building RESTful APIs.
          MongoDB: For database management.`,
    githublink: "https://github.com/puja-debnath/portfolio",
  },
];
