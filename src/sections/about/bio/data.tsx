import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export interface LINKTYPES {
  icon: JSX.Element;
  left: string;
  bottom: string;
  smLeft: string;
  smBottom: string;
}

export const socialLinks: LINKTYPES[] = [
  {
    icon: <FaFacebookF />,
    left: "71px",
    bottom: "6px",
    smLeft: "25px",
    smBottom: "13px",
  },
  {
    icon: <FaInstagram />,
    left: "128px",
    bottom: "-12px",
    smLeft: "80px",
    smBottom: "-11px",
  },
  {
    icon: <FaLinkedinIn />,
    left: "192px",
    bottom: "-12px",
    smLeft: "144px",
    smBottom: "-9px",
  },
  {
    icon: <FaGithub />,
    left: "249px",
    bottom: "10px",
    smLeft: "196px",
    smBottom: "18px",
  },
];
