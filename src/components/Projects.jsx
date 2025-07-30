import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      name: "Smart Hospital Patient Flow System",
      description:
        "A full-stack platform to digitalize the paper work and make process digital by enabling online patient registration and real-time queue tracking.",
      techStack: [
        "Python",
        "Django REST Framework",
        "React",
        "Tailwind CSS",
        "JWT",
        "MySQL",
      ],
      gitHubLink: "https://github.com/Praveen9248/Smart_Hospital_Flow_System",
    },
    {
      id: 2,
      name: "Smart Note Keeper: A Google Keep Clone with AI-Powered Insights",
      description:
        "A full-stack platform to digitalize the paper work and make process digital.",
      techStack: [
        "Python",
        "Django REST Framework",
        "React",
        "Tailwind CSS",
        "JWT",
        "Google Translate API",
        "Web Speech API",
        "MySQL",
      ],
      gitHubLink: "https://github.com/Praveen9248/Google_Keep_AddOn",
    },
    {
      id: 3,
      name: "Personal Portfolio Website",
      description:
        "A full-stack platform to digitalize the paper work and make process digital.",
      techStack: ["React", "Tailwind CSS", "FormSubmit API"],
      gitHubLink: "https://github.com/Praveen9248/Praveen-ks-Portfolio",
    },
    {
      id: 4,
      name: "Ecommerce Website",
      description:
        "A full-stack eCommerce system with user roles and enabled product listings, shopping cart, order management, and PayPal integration.",
      techStack: [
        "Python",
        "Django REST Framework",
        "React",
        "Tailwind CSS",
        "JWT",
        "MySQL",
      ],
      gitHubLink: "https://github.com/Praveen9248/EcommerceShop-DRF-React",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center dark:text-gray-100 dark:bg-gray-900 pt-6">
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-transparent text-5xl font-bold pb-2">
          Projects
        </span>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-1 w-40 mt-4 rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 min-w-screen text-gray-100 dark:bg-gray-900 py-6">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-gray-700 rounded-xl p-4 w-2/3 md:w-1/2 lg:w-1/3"
          >
            <div className="flex justify-between mb-4 text-xl">
              <h1 className="text-xl font-bold">{project.name}</h1>
              <span>
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
            </div>
            <div>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2 my-4">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="px-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div>
                <span>View Code</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center text-2xl p-4 text-gray-100 dark:bg-gray-900 ">
        <a
          href="https://github.com/Praveen9248"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-4 bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-2 rounded-2xl"
        >
          <FaGithub />
          <div>View More on GitHub</div>
        </a>
      </div>
    </>
  );
};

export default Projects;
