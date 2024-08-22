import { FaCheckSquare, FaSmile } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <div
        className="hero min-h-96 object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/vPZ3mZc/Banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="text-black text-center w-full">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold justify-center">We help to choose!</h1>
            <div className="mb-5 flex items-center gap-2 justify-center font-semibold">
            <FaCheckSquare className="text-blue-600"/>Best Hospital<FaCheckSquare className="text-blue-600"/>Best Doctor <FaCheckSquare className="text-blue-600"/>Best Cost
            </div>
            <div className="w-1/2 mx-auto">
            <SearchBar></SearchBar>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between my-5">
        <div className="flex-col gap-2 text-center">
        <FaSmile className=" text-red-500 hover:text-blue-600 text-2xl mx-auto"/>
        <h1 className="font-semibold text-xl">3000+</h1>
        <h3 className="">HAPPY PATIENTS</h3>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-col gap-2 text-center">
        <FaSmile className=" text-red-500 hover:text-blue-600 text-2xl mx-auto"/>
        <h1 className="font-semibold text-xl">3000+</h1>
        <h3 className="">HAPPY PATIENTS</h3>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-col gap-2 text-center">
        <FaSmile className=" text-red-500 hover:text-blue-600 text-2xl mx-auto"/>
        <h1 className="font-semibold text-xl">3000+</h1>
        <h3 className="">HAPPY PATIENTS</h3>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-col gap-2 text-center">
        <FaSmile className=" text-red-500 hover:text-blue-600 text-2xl mx-auto"/>
        <h1 className="font-semibold text-xl">3000+</h1>
        <h3 className="">HAPPY PATIENTS</h3>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-col gap-2 text-center">
        <FaSmile className=" text-red-500 hover:text-blue-600 text-2xl mx-auto"/>
        <h1 className="font-semibold text-xl">3000+</h1>
        <h3 className="">HAPPY PATIENTS</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
