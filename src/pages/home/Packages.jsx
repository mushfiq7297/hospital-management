import DiseaseSwiper from "../../components/DieasesSwiper";

const Packages = () => {
  return (
    <div className="">
      <div className=" bg-base-200 min-h-screen">
        <div className="text-center">
          <div className="py-16">
            <h1 className="text-4xl font-bold ">OUR PACKAGES / OFFERS</h1>
            <div className="flex w-16 mx-auto my-2">
              <p className="border-b-4 border-blue-600  w-16 mx-auto"></p>
              <p className="border-b-4 border-red-500 w-16 mx-auto"></p>
            </div>
          </div>
        </div>
      <div>
      <DiseaseSwiper></DiseaseSwiper>
      </div>
      </div>
    </div>
  );
};

export default Packages;
