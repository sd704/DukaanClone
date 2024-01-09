import Menu from "./Menu";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";


function SideBar() {
    return (
        <div className="sidebar">
            <SideBarHeader />
            <Menu />
            <SideBarFooter />
        </div>
    );
}

export default SideBar;
