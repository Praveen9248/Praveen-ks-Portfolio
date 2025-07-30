import { TbCertificate } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";
const Certification = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Python (Basic)",
      platform: "HackerRank",
      url: "https://www.hackerrank.com/certificates/1d11f338607b",
    },
    {
      id: 2,
      title: "SQL (Basic)",
      platform: "HackerRank",
      url: "https://www.hackerrank.com/certificates/e229bb60bff9",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center dark:text-gray-100 dark:bg-gray-900 py-6">
        <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-transparent text-5xl font-bold">
          Certifications
        </span>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-1 w-40 mt-3 rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 min-w-screen text-gray-100 dark:bg-gray-900 py-6">
        {certificatesData.map((certificate) => (
          <div
            key={certificate.id}
            className="flex flex-col bg-gray-700 rounded-xl p-4 w-2/3 md:w-1/2 lg:w-1/3"
          >
            <div className="flex items-center gap-x-4">
              <span className="text-xl bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
                <TbCertificate />
              </span>
              <div>
                <h1 className="text-xl font-semibold">{certificate.title}</h1>
                <p>{certificate.platform}</p>
              </div>
            </div>
            <a href={certificate.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center p-2 text-blue-500">
                <p>View Certificate</p>
                <span className="pt-1">
                  <HiArrowRight />
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certification;
