import { NAVITEMS, navData } from "./nav-data";

const SideNav = () => {
  return (
    <div className="bg-grey-main min-h-screen border-r border-gray-800">
      <div className="bg-primary-main flex items-center justify-center h-20">
        <h1 className="text-4xl font-extrabold tracking-wider">AH</h1>
      </div>
      <div className="mt-12">
        <ul>
          {navData.map((item: NAVITEMS, i: number) => (
            <li
              className={`py-6 flex justify-center text-3xl cursor-pointer ${
                i === 0 ? "" : "border-t border-gray-800"
              }`}
              key={i}
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
