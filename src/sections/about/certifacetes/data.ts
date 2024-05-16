import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface DATATYPE {
  title: string;
  img: string | StaticImport;
  from: string;
  platform: string;
}

export const data: DATATYPE[] = [
  {
    title: "Modern Javascript from Beginning",
    img: "/images/code-icons/javascript.png",
    from: "Brad Traversy",
    platform: "Udemy",
  },
  {
    title: "React Complete Guid, (inc Hooks,Redux)",
    img: "/images/code-icons/react.png",
    from: "Maximilian",
    platform: "Udemy",
  },
  {
    title: "Node js Tutorial & Project Course",
    img: "/images/code-icons/nodejs.png",
    from: "John Smilga",
    platform: "Udemy",
  },
];
