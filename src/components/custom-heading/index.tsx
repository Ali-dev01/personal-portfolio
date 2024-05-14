const CustomHeading = ({ title }: { title: string }) => {
  return (
    <div className="relative ml-4">
      <div className="absolute animate-bounce top-0 -left-4 w-11 h-11 bg-primary-100 rounded-full"></div>
      <h1 className="relative text-3xl font-bold tracking-wide">{title}</h1>
    </div>
  );
};
export default CustomHeading;
