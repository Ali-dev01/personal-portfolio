import CustomHeading from "@/components/custom-heading";
import CustomTabs from "./custom-tabs";

const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-grey-light px-3 md:px-6 lg:px-16 pt-20 pb-20">
      <CustomHeading title="My Portfolio." />
      <CustomTabs tabsArray={["Industry", "Personal"]}>
        <p>Industry</p>
        <p>Personal</p>
      </CustomTabs>
    </div>
  );
};
export default Portfolio;
