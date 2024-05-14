import Image from "next/image";

import useScreenSize from "@/hooks/use-screen-size";

const ReviewCard = () => {
  const { currentScreenSize: size } = useScreenSize();

  return (
    <div className="bg-black rounded-xl p-4 md:p-6 flex items-start gap-6">
      <Image
        src="/images/reviews/team-1.jpg"
        alt="review"
        width={size === "sm" ? 60 : 100}
        height={size === "sm" ? 60 : 100}
        className="rounded-full"
      />

      <div>
        <p className="text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>
        <h2 className="font-semibold text-xl mt-4">Nancy Byers</h2>
        <p className="italic text-gray-500 text-sm mt-1">UI/UX Designer</p>
      </div>
    </div>
  );
};
export default ReviewCard;
