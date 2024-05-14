import CertificateCard from "@/components/certificate-card";
import CustomHeading from "@/components/custom-heading";
import { DATATYPE, data } from "./data";

const Certificates = () => {
  return (
    <>
      <div className="mt-28">
        <CustomHeading title="Certificates" />
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-12 gap-6">
          {data.map((item: DATATYPE, i: number) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="hover:-translate-y-2 transition-all duration-500">
                <CertificateCard data={item} />
              </div>
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
export default Certificates;
