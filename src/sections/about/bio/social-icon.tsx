import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SocialIcon = ({ children }: Props) => {
  return (
    <div
      className={`bg-grey-dark border-2 border-white rounded-full p-2 cursor-pointer transition-all duration-500 hover:bg-primary-main hover:scale-110`}
    >
      <Link href="#">{children}</Link>
    </div>
  );
};
export default SocialIcon;
