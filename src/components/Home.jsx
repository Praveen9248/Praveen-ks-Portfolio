import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import poster from "../assets/poster.jpg";
import { HashLink } from "react-router-hash-link";
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-gray-900 overflow-hidden bg-gray-300 dark:bg-gray-900 dark:text-gray-200 min-w-screen pt-25 pb-15">
        <div className="flex flex-col items-center justify-center w-full">
          <span>
            <img src={poster} alt="" className="rounded-full" />
          </span>
          <span className="text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-transparent my-2 text-center">
            Praveen Kumar K S
          </span>
          <span className="text-xl md:text-3xl">Software Engineer Intern</span>
          <span className="text-xl text-center mt-2">
            Full-stack developer passionate about creating innovative solutions
            and building impactful applications.
          </span>
          <div className="flex flex-wrap mt-4 p-4 rounded-xl space-x-4">
            <HashLink
              smooth
              to={"#projects"}
              className="p-2 font-semibold bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl"
            >
              View Projects
            </HashLink>
            <HashLink
              smooth
              to={"#contact"}
              className="p-2 font-semibold bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl"
            >
              Contact Me
            </HashLink>
          </div>
          <div className="flex flex-wrap space-x-4 mt-4">
            <a
              href="https://github.com/Praveen9248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-k-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:kspraveen9248@gmail.com" className="text-2xl">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
