import React from "react";
const styles = {
    margin:
    {
        maxWidth: "80%",
        margin: "5px 50px 5px 5px"
    },
    img:
    {
        width: "10rem",
        float: "left",
        marginRight: "10px"
    },
    bdy:
    {
        textAling: "center",
    },
    btn:
    {
        float:"right",
        marginTop: "-2rem"
    }
}
function Card(props) {
    return <div className="mx-md-5"><div className="card" style={styles.margin}>
        <div className="card-header text-white bg-dark mb-3">
            <h5 className="card-title">{props.title}</h5>
            <div style={styles.btn}>
                <a type="button" className="btn btn-secondary btn-sm active mr-2" href={props.link}> View </a>
                {!props.show ? <button className="btn btn-secondary btn-sm active mr-2" onClick={() => props.saveBook(props)}> Save </button> : ""}
                {props.show ? <button className="btn btn-secondary btn-sm active mr-2" onClick={() => props.deleteBook(props._id)}> Delete </button> : ""}
            </div>
        </div>
        <div className="card-body" style={styles.bdy}>
            <p className="card-text"><b>Authors: <span><i>{props.authors}</i></span></b></p>
            <img className="card-img-left" style={styles.img} src={props.image} alt="Card image cap" />
            <p className="card-text">{props.description}</p>
        </div>
    </div>
        <hr />
    </div>
}

export default Card;
