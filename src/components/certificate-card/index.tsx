import { DATATYPE } from "@/sections/about/certifacetes/data";
import Image from "next/image";

const CertificateCard = ({ data }: { data: DATATYPE }) => {
  return (
    <div className="bg-black rounded-xl p-3 flex items-center gap-4">
      <div>
        <Image src={data?.img} alt="js" width={100} height={100} />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{data.title}</h4>
        <p className="text-gray-500 mt-2">
          By :{data.from} - <span className="italic">{data.platform}</span>
        </p>
      </div>
    </div>
  );
};
export default CertificateCard;
