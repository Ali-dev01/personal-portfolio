const ExperienceCard = () => {
  return (
    <div className="bg-grey-light rounded-xl p-4 md:p-6">
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
        <div className="w-full md:border-r border-b md:border-b-0 border-gray-800 pb:0 md:pr-6">
          <h1 className="text-white text-2xl font-semibold mb-1">Mid. React Developer</h1>
          <p className="text-gray-300 italic text-sm mb-2 tracking-wider">Consultancy Outfit</p>
          <p className="text-gray-300 text-xs mb-1">April 2022 - Present</p>
          <button className="bg-primary-main mb-5 md:mb-0 mt-1 px-3 py-2 text-white font-semibold rounded-[3px] text-xs">
            Full Time
          </button>
        </div>
        <div>
          <p className="text-gray-400 text-sm">
            Developed responsive and user-friendly web applications using React, optimizing user
            experience and enhancing overall functionality and maintained state management with
            Redux, ensuring efficient data flow and seamless performance. Utilized React Hooks to
            streamline component logic, resulting in cleaner and more maintainable code and
            collaborated with cross-functional teams to design and integrate RESTful APIs, enhancing
            communication between front-end and back-end systems. Collaborated with UI/UX designers
            to translate design concepts into interactive and visually appealing user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
