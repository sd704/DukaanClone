function TableRow(props) {
    return (
        <div className="tablerow">
            <a href="/">{props.id}</a>
            {(props.status === "s") ?
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                :
                <div>
                    <div className="statusdot" style={{ background: "#999999" }}></div>
                    <p>Processing</p>
                </div>
            }
            <p>{props.tid}</p>
            <p>{props.time}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default TableRow;
