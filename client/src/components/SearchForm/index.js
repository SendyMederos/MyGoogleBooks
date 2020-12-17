import React from "react";


export function Form({ children }) {
    return <div className="my-5">
        <h5> Search A Book:</h5>
        <div className="input-group mb-3 ">
            {children}
        </div>
    </div>
}
export function Input(props) {
    return <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"
        {...props}
    />
}

export function SearchButton(props) {
    return <div className="input-group-append">
        <button className="btn btn-outline-dark" type="button"{...props}><i className="fa fa-search"></i>
            
        </button>
    </div>

}
