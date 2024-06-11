import Image from "next/image";

import useScreenSize from "@/hooks/use-screen-size";

interface Props {
  img: string;
  name: string;
  role: string;
  review: string;
}

const ReviewCard = (props: Props) => {
  const { img, name, role, review } = props;

  const { currentScreenSize: size } = useScreenSize();

  return (
    <div className="bg-black min-h-[190px] rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start gap-3  md:gap-6">
      <Image
        src={img}
        alt="review"
        width={size === "sm" ? 55 : 80}
        height={size === "sm" ? 55 : 80}
        className="rounded-full"
      />

      <div>
        <p className="text-gray-400">{review}</p>
        <h2 className="font-semibold text-xl mt-4">{name}</h2>
        <p className="italic text-gray-500 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
