import React from "react";
//import "./App.css";
// import Display from "./Display";
// import ButtonPanel from "./ButtonPanel";
// import calculate from "../logic/calculate";

// new Date("dateString") is browser-dependent and discouraged, so we'll write
// a simple parse function for U.S. date format (which does no error checking)
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

function App() {
    return (
        <div className="App">
            <section>
                <h1> days since? </h1>
                <article>
                    <input autofocus placeholder="day of choice" />
                    <input type="button"></input>
                    <br></br>
                    {datediff(date1, date2)}
                </article>
            </section>
        </div >
    );
}

export default App;