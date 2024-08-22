
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;