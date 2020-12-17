import React from "react";

function Jumbotron() {
    return (
        <div className="mx-5 ">
            <div
                style={{ height: 200, width: "80%", margin: 10, paddingTop: 60, textAlign: "center" }}
                className="jumbotron"
            >
                <h2>Google Search</h2>
                <h6>Look for and Save Books of Interest</h6>
            </div>
        </div>
    );
}

export default Jumbotron;
