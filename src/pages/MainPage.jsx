import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Tab from "../components/Tab";
import tabsData from '../tabs.json';
import "../index.css";

const MainPage = () => {
    const [navList, setNavList] = useState([])
  
    useEffect(() => {
        setNavList(tabsData)
    }, []);

    return <>
        <nav>
                {navList.map((nav) => <Tab key={nav.id} nav={nav} />)}
        </nav>
        <Suspense>
        <Outlet />
      </Suspense>
    </>
}
export default MainPage;