import Link from "next/link";
import { ReactNode } from "react";

interface SocialIconProps {
  children: ReactNode;
  bottom: number;
  left: number;
}

const SocialIcon = ({ children, bottom, left }: SocialIconProps) => {
  const bottomClass = bottom < 0 ? `-bottom-${Math.abs(bottom)}` : `bottom-${bottom}`;

  return (
    <div
      className={`absolute ${bottomClass} left-${left} bg-grey-dark border-2 border-white rounded-full p-2 cursor-pointer transition-all duration-500 hover:bg-primary-main hover:scale-110`}
    >
      <Link href="#">{children}</Link>
    </div>
  );
};
export default SocialIcon;
