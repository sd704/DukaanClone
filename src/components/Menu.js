import MenuItem from "./MenuItem";

const pages = ["Home", "Orders", "Products", "Delivery", "Marketing", "Analytics", "Payments", "Tools", "Discounts", "Audience", "Appearance", "Plugins"];

function Menu() {
    return (
        <div className="menu">
            {pages.map(page => <MenuItem page={page} icon={page} selected="Payments" />)}
        </div>
    );
}

export default Menu;
