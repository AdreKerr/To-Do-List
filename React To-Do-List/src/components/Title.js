import React from 'react'

function Title() {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 title">
                <h1 className="col-12">To Do List</h1>
                <div className="space2"></div>
                <div className="col-12 listAdder row">
                    <input className="col-12" type="text" id="AddToList" placeholder="What task do you need to do today?" />
                    <input className="col-12" type="time" id="TimeToList" placeholder="What time do you want to do this task?" />
                    {/* <!-- time for the task to be complete --> */}
                    <input className="col-12" type="button" id="Add" value="ADD" />
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>

        </div>
    )
}
export default Title;