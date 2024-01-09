function NavBar() {
    return (
        <div className="navbar">
            <div>
                <h1>Payouts</h1>
                <img src="/icons/question.svg" alt=""></img>
                <a>How it works</a></div>
            <div className="searchbox">
                <img src="/icons/search.svg" alt=""></img>
                <input type="text" placeholder="Search features, tutorials, etc."></input>
            </div>
            <div className="options">
                <div className="chat"><img src="/icons/chat.svg" alt=""></img> </div>
                <img src="/icons/triangle.svg" alt="" className="dropdown"></img>
            </div>
        </div>
    );
}

export default NavBar;