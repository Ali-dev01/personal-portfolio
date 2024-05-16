import EducationSkills from "./education-skills";
import MyExperience from "./my-experience";

const Experience = (): JSX.Element => {
  return (
    <div className="px-3 md:px-6 lg:px-16 pt-20 pb-20">
      <MyExperience />
      <EducationSkills />
    </div>
  );
};
export default Experience;
