import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  url?: string;
  desc: string;
  tags: string[];
}

const PortfolioCard = (props: Props) => {
  const { img, title, desc, tags, url = "#" } = props;
  return (
    <div className="bg-black rounded-xl min-h-[442px] group">
      <div className="w-full relative overflow-hidden">
        <Image
          src={img}
          alt="img"
          width={0}
          height={0}
          objectFit="contain"
          sizes="full"
          className="w-full h-auto rounded-tr-xl rounded-tl-xl transition-all duration-300 brightness-90 group-hover:brightness-50"
        />
        <button className="absolute transition-all duration-500 hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-main text-white rounded-full tracking-wider px-5 py-1">
          <Link href={url} target="_blank">
            live
          </Link>
        </button>
      </div>
      <div className="p-4">
        <Link href={url} target="_blank">
          <h2 className="text-lg tracking-wider text-gray-200 italic underline">{title}</h2>
        </Link>

        <p className="mt-3 text-gray-400 text-sm">{desc}</p>
        <div className="mt-5 mb-2 flex gap-3 flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-grey-light text-white px-4 py-2 text-xs tracking-wide rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
