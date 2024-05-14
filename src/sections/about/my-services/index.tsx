"use client";

import CustomHeading from "@/components/custom-heading";
import ServiceCard from "@/components/service-card";

const MyServices = () => {
  return (
    <>
      <div className="mt-28">
        <CustomHeading title="What I do?" />
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-12 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="col-span-12 md:col-span-6 lg:col-span-4">
              <ServiceCard />
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default MyServices;
