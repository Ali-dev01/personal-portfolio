interface Props {
  jobTitle: string;
  company: string;
  timeStamps: string;
  desc: string;
}

const ExperienceCard = (props: Props) => {
  const { jobTitle, company, timeStamps, desc } = props;

  return (
    <div className="bg-grey-light rounded-xl p-4 md:p-6">
      <div className="flex flex-wrap items-center md:flex-nowrap gap-4 md:gap-6">
        <div className="w-full md:w-[20%] md:border-r border-b md:border-b-0 border-gray-800 pb:0 md:pr-6">
          <h1 className="text-white text-2xl font-semibold mb-1">{jobTitle}</h1>
          <p className="text-gray-300 italic text-sm mb-2 tracking-wider">{company}</p>
          <p className="text-gray-300 text-xs mb-1">{timeStamps}</p>
          <button className="bg-primary-main mb-5 md:mb-0 mt-1 px-3 py-2 text-white font-semibold rounded-[3px] text-xs">
            Full Time
          </button>
        </div>
        <div className="w-full md:w-[80%]">
          <p className="text-gray-400 text-md">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
