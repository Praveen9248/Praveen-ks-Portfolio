import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaRegFileLines } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center dark:text-gray-100 dark:bg-gray-900 py-6 ">
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-transparent text-5xl font-bold">
          Get In Touch
        </span>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-1 w-40 mt-3 rounded-full"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 dark:bg-gray-900 text-gray-100 pb-6">
        <div className="w-2/3 md:w-1/2 lg:w-1/3 bg-gray-700 p-6 rounded-xl text-white">
          <h2 className="text-2xl sm:text-xl  font-bold mb-4">Send Message</h2>
          <form
            action="https://formsubmit.co/1df231672eb61e4a4dd3c69020bc6b2c"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                required
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/3 gap-4">
          <div className="flex flex-col bg-gray-700 p-4 rounded-xl w-full gap-y-4">
            <h1 className="pb-4 text-xl font-bold">Contact Information</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
                <FiMail />
              </span>
              <div>
                <h1>Email</h1>
                <a
                  href="mailto:kspraveen9248@gmail.com"
                  className="text-xs sm:text-base"
                >
                  kspraveen9248@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
                <GrLocation />
              </span>
              <div>
                <h1>Location</h1>
                <p>Bengaluru, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
                <MdOutlineAccessTime />
              </span>
              <div>
                <h1>Availability</h1>
                <p>Open for opportunities</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-xl w-full gap-4">
            <h1 className="pb-4 text-xl font-bold md:text-2xl">
              Connect With Me
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/praveen-kumar-k-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-center p-2 rounded-xl sm:w-1/3 bg-gray-500 hover:bg-gray-400"
              >
                <span>
                  <FaLinkedin className="text-xl" />
                </span>
                <h1>LinkedIn</h1>
              </a>
              <a
                href="https://github.com/Praveen9248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-center p-2 rounded-xl sm:w-1/3 bg-gray-500 hover:bg-gray-400"
              >
                <span>
                  <FaGithub className="text-xl" />
                </span>
                <h1>GitHub</h1>
              </a>
              <a
                href="https://leetcode.com/u/praveenreddy9248/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-center p-2 rounded-xl sm:w-1/3 bg-gray-500 hover:bg-gray-400"
              >
                <span>
                  <SiLeetcode className="text-xl" />
                </span>
                <h1>LeetCode</h1>
              </a>
              <a
                href="https://drive.google.com/file/d/1E__SDt_YBUzskKc5tiQdIaPojfy1ojEQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-center p-2 rounded-xl sm:w-1/3 bg-gray-500 hover:bg-gray-400 text-white"
              >
                <span>
                  <FaRegFileLines className="text-xl" />
                </span>
                <h1>Resume</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
