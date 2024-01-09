function MenuItem(props) {

    const menuStyle = {
        background: props.page === props.selected ? '#353C53' : '',
    };

    return (
        <div className="menuitem" style={menuStyle}>
            <img src={`./icons/${props.icon}.svg`} alt={`${props.icon}`}></img>
            <h1>{props.page}</h1>
        </div>
    );
}

export default MenuItem;