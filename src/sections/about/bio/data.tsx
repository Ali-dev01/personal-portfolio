import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export interface LINKTYPES {
  icon: JSX.Element;
  left: number;
  bottom: number;
}

export const socialLinks: LINKTYPES[] = [
  {
    icon: <FaFacebookF />,
    left: 16,
    bottom: 3,
  },
  {
    icon: <FaInstagram />,
    left: 32,
    bottom: -3,
  },
  {
    icon: <FaLinkedinIn />,
    left: 48,
    bottom: -3,
  },
  {
    icon: <FaTwitter />,
    left: 64,
    bottom: 3,
  },
];
