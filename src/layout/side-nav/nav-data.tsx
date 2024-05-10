import { FiPhoneOutgoing, FiUser } from "react-icons/fi";
import { IoDocumentTextOutline, IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export interface NAVITEMS {
  title: string;
  icon: JSX.Element;
}

export const navData: NAVITEMS[] = [
  {
    title: "home",
    icon: <IoHome />,
  },
  {
    title: "about",
    icon: <FiUser />,
  },
  {
    title: "resume",
    icon: <IoDocumentTextOutline />,
  },
  {
    title: "work",
    icon: <MdWork />,
  },
  {
    title: "contact",
    icon: <FiPhoneOutgoing />,
  },
];
