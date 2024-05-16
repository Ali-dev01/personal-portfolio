import { FiPhoneOutgoing, FiUser } from "react-icons/fi";
import { IoDocumentTextOutline, IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export interface NAVITEMS {
  title: string;
  link: string;
  icon: JSX.Element;
}

export const navData: NAVITEMS[] = [
  {
    title: "home",
    link: "/#home",
    icon: <IoHome />,
  },
  {
    title: "bio",
    link: "/#bio",
    icon: <FiUser />,
  },
  {
    title: "resume",
    link: "/#resume",
    icon: <IoDocumentTextOutline />,
  },
  {
    title: "portfolio",
    link: "/#portfolio",
    icon: <MdWork />,
  },
  {
    title: "contact",
    link: "/#contact",
    icon: <FiPhoneOutgoing />,
  },
];
