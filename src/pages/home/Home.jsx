import Banner from "../../components/Banner";
import SocialIcons from "../../components/SocialIcons";
import Packages from "./Packages";


const Home = () => {
    return (
        <div className="relative mx-auto min-h-screen">
            <SocialIcons></SocialIcons>
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;