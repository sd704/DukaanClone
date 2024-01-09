import TableRow from "./TableRow";

function Transactions() {
    return (
        <div className="transactions">
            <h1 className="overviewheading">Transactions | This Month</h1>
            <div className="transactionbtns">
                <button type="button" className="payoutsbtn">Payouts (22)</button>
                <button type="button" className="refundbtn">Refunds (6)</button>
            </div>

            <div className="ordersearchtopbar">
                <div className="ordersearchbox">
                    <img src="/icons/search.svg" alt=""></img>
                    <input type="text" placeholder="Order ID or transaction ID"></input>
                </div>
                <div className="searchoptions">
                    <div className="sortbtn">
                        <p>Sort</p>
                        <img src="/icons/sort.svg" alt=""></img>
                    </div>
                    <img src="/icons/download.svg" alt="" className="downloadbtn"></img>
                </div>
            </div>

            <div className="tableheader">
                <p>Order ID</p>
                <p>Status</p>
                <p>Transaction ID</p>
                <p>Refund date</p>
                <p>Order amount</p>
            </div>

            <TableRow id="#281209" status="s" tid="131634495747" time="Today, 08:45 PM" price="₹1,125.00" />
            <TableRow id="#281208" status="p" tid="131634495747" time="Yesterday, 3:00 PM" price="₹1,125.00" />
            <TableRow id="#281207" status="s" tid="131634495747" time="12 Jul 2023, 03:00 PM" price="₹1,125.00" />
            <TableRow id="#281206" status="s" tid="131634495747" time="12 Jul 2023, 01:00 PM" price="₹1,125.00" />
            <TableRow id="#281205" status="s" tid="131634495747" time="11 Jul 2023, 03:00 PM" price="₹1,125.00" />
            <TableRow id="#281204" status="s" tid="131634495747" time="11 Jul 2023, 02:00 PM" price="₹1,125.00" />

        </div>
    );
}

export default Transactions;