function OverView() {
    return (
        <div className="overview">
            <div className="overviewtopbar">
                <h1 className="overviewheading">Overview</h1>
                <select name="months" id="months">
                    <option value="current">This Month</option>
                    <option value="previous">Last Month</option>
                </select>
            </div>
            
            <div className="overviewgrid">
                <div className="nextpayout">
                    <div className="nextpayoutheading">
                        <p>Next Payout</p>
                        <img src="/icons/questionwhite.svg" alt=""></img>
                    </div>
                    <div className="nextpayoutbody">
                        <h1>₹2,312.23</h1>
                        <div>
                            <p>23 orders</p>
                            <img src="/icons/rightarrow.svg" alt=""></img>
                        </div>
                    </div>
                    <div className="nextpayoutfooter">
                        <p>Next payout date:</p>
                        <p>Today, 04:00PM</p>
                    </div>
                </div>

                <div className="amountpending">
                    <div className="amountpendingheading">
                        <p>Amount Pending</p>
                        <img src="/icons/question.svg" alt=""></img>
                    </div>
                    <div className="amountpendingbody">
                        <h1>₹92,312.20</h1>
                        <div>
                            <p>13 orders</p>
                            <img src="/icons/rightarrowblue.svg" alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="amountpending">
                    <div className="amountpendingheading">
                        <p>Amount Processed</p>
                        <img src="/icons/question.svg" alt=""></img>
                    </div>
                    <div className="amountpendingbody">
                        <h1>₹23,92,312.19</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OverView;