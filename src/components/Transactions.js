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

            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>Today, 08:45 PM</p>
                <p>₹1,125.00</p>
            </div>

            <div className="tablerow">
                <a href="/">#281208</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Processing</p>
                </div>
                <p>131634495747</p>
                <p>Yesterday, 3:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>
            <div className="tablerow">
                <a href="/">#281209</a>
                <div>
                    <div className="statusdot"></div>
                    <p>Successful</p>
                </div>
                <p>131634495747</p>
                <p>12 Jul 2023, 03:00 PM</p>
                <p>₹1,125.00</p>
            </div>

        </div>
    );
}

export default Transactions;