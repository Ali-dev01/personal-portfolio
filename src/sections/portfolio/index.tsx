import CustomHeading from "@/components/custom-heading";
import CustomTabs from "@/components/custom-tabs";
import CompanyProjects from "./company-projects";
import PersonalProjects from "./personal-projects";

const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-grey-light px-3 md:px-6 lg:px-16 pt-20 pb-20">
      <CustomHeading title="My Portfolio." />
      <CustomTabs tabsArray={["Organizaional", "Independent"]}>
        <CompanyProjects />
        <PersonalProjects />
      </CustomTabs>
    </div>
  );
};
export default Portfolio;
