import CustomHeading from "@/components/custom-heading";
import Image from "next/image";
import SocialIcon from "./social-icon";

import { LINKTYPES, socialLinks } from "./data";

const Bio = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center">
          <div className="relative">
            <Image
              src="/images/user.png"
              alt="user"
              width={350}
              height={350}
              className="mx-auto rounded-full border-4 border-primary-main"
            />
            {socialLinks.map((item: LINKTYPES, i: number) => (
              <div key={i}>
                <SocialIcon left={item.left} bottom={item.bottom}>
                  {item.icon}
                </SocialIcon>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-md text-gray-300">Full-Stack Developer</p>
            <h2 className="text-5xl font-semibold">Ali Hassan</h2>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <CustomHeading title="Biography" />
          <p className="mt-16 text-gray-300">
            I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San
            Francisco. I code and create web elements for amazing people around the world. I like
            work with new people. New people new Experiences.
            <br />
            <br /> I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from
            San Francisco. I code and create web elements for amazing people around the world. I
            like work with new people. New people new Experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 sm:gap-20 md:gap-30">
            <ul>
              <li className="text-lg font-bold text-nowrap">
                Name : <span className="font-extralight text-gray-300">&nbsp; Ali Hassan</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Age : <span className="font-extralight text-gray-300">&nbsp; 27 Years</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Address : <span className="font-extralight text-gray-300">&nbsp; Lahore</span>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-bold text-nowrap">
                Phone : <span className="font-extralight text-gray-300">&nbsp; +92-3120790641</span>
              </li>
              <li className="text-lg font-bold mt-4 text-nowrap">
                Email :{" "}
                <span className="font-extralight text-gray-300">&nbsp; alidev098@gmail.com</span>
              </li>
              <li className="text-lg font-bold mt-4 text-nowrap">
                Freelance : <span className="font-extralight text-gray-300">&nbsp; Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default Bio;
