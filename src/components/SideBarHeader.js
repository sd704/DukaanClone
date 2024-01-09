function SideBarHeader() {
    return (
        <div className="sidebarheader">
            <img src="/logo.png" alt="Nishyan" className="logo"></img>
            <div className="storename">
                <h1>Nishyan</h1>
                <a href="/">Visit store</a>
            </div>
            <img src="/icons/downarrowwhite.svg" alt=">"></img>
        </div>
    );
}

export default SideBarHeader;
