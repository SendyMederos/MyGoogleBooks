import React from "react";


function Form() {
    return (  <div className="my-5">
        <h5> Search A Book:</h5>
        <div className="input-group mb-3 ">
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-dark" type="button"><i className="fa fa-search"></i>
                </button>
            </div>
        </div>
        </div>
    );
}

export default Form;
