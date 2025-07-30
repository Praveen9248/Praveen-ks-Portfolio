import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center dark:text-gray-100 dark:bg-gray-900 pt-6">
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-transparent text-5xl font-bold ">
          About Me
        </span>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-1 w-40 mt-3 rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 min-w-screen text-gray-100 dark:bg-gray-900 dark:text-gray-100 py-6">
        <div className="bg-gray-700 w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-xl">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
              <FaRegUser />
            </span>
            <h1 className="text-2xl font-bold">Bio</h1>
          </div>
          <p className="pt-4">
            I'm Praveen Kumar K S, a full-stack developer and Computer Science
            undergraduate based in Bengaluru, India. I'm passionate about
            creating innovative solutions and building impactful applications
            that solve real-world problems.
          </p>
          <br />
          <p>
            With a strong foundation in both frontend and backend technologies,
            I enjoy working on projects that challenge me to learn new
            technologies and improve my skills. I'm always eager to collaborate
            with like-minded developers and contribute to open-source projects.
          </p>
          <br />
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
        <div className="bg-gray-700 w-2/3 md:w-1/2 lg:w-1/3 px-8 py-6 rounded-xl">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
              <HiOutlineLightBulb />
            </span>
            <h1 className="text-2xl font-bold">Skills & Technologies</h1>
          </div>

          <div className="flex flex-wrap pt-5 gap-x-10 gap-y-5 ">
            <div className="sm:w-2/3 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl font-bold text-blue-400">Frontend</h1>
              <ul className="list-disc marker:text-blue-400 marker:text-xl pl-5">
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="w-2/3 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl font-bold text-green-500">Backend</h1>
              <ul className="list-disc marker:text-green-500 marker:text-xl pl-5">
                <li>Python</li>
                <li>Django Web Framework</li>
                <li>Django REST Framework</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="w-2/3 md:w-1/2 lg:w-1/3">
              <h1 className="text-xl font-bold text-pink-300">Database</h1>
              <ul className="list-disc marker:text-pink-300 marker:text-xl pl-5">
                <li>MySQL</li>
              </ul>
            </div>
            <div className="w-2/3 md:w-1/2 lg:w-1/3">
              <span className="text-xl font-bold text-amber-300">Tools</span>
              <ul className="list-disc marker:text-amber-300 marker:text-xl pl-5">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-xl">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
              <RiGraduationCapLine />
            </span>
            <h1 className="text-2xl font-bold">Education</h1>
          </div>
          <div className="pt-4">
            <p className="font-semibold">
              Bachelor of Engineering in Computer Science
            </p>
            <p>C M R Institute Of Technology, Bangalore</p>
            <p className="font-light">2021 - 2025</p>
          </div>
        </div>
        <div className="bg-gray-700 w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-xl">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
              <MdOutlineMeetingRoom />
            </span>
            <h1 className="text-2xl font-bold">Experience</h1>
          </div>
          <div className="pt-4">
            <p className="font-semibold">Full Stack Developer intern</p>
            <p>DOTCH ENDEAVOURS PVT LTD, Mysore</p>
            <p className="font-light">2024 December - 2025 March</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
