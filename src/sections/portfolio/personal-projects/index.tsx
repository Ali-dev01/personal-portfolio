import PortfolioCard from "@/components/portfolio-card";
import { DATA_TYPE } from "../company-projects/data";
import { data } from "./data";

const PersonalProjects = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((item: DATA_TYPE) => (
        <div key={item.title} className="col-span-12 md:col-span-6 lg:col-span-4">
          <PortfolioCard
            img={item.img}
            title={item.title}
            url={item.url}
            desc={item.desc}
            tags={item.tags}
          />
        </div>
      ))}
    </div>
  );
};
export default PersonalProjects;
