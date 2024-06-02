import Bio from "./bio";
import Certificates from "./certifacetes";
import MyServices from "./my-services";
import Reviews from "./reviews";

const Biography = (): JSX.Element => {
  return (
    <div className="bg-grey-light pt-20 pb-20">
      <Bio />
      <MyServices />
      <Certificates />
      {/* <Reviews /> */}
    </div>
  );
};
export default Biography;
