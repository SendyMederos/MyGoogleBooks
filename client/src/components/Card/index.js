import React from "react";
const styles = {
    margin :
        { 
             maxWidth: "100%",
             margin: "5px 50px 5px 5px"
        },
    img: 
        {
            width:"10rem",
            float: "left",
            marginRight:"10px"
        },
    bdy:
    {
        textAling: "center",
    },
 
   }
function Card(props) {
    return <div className= "mx-md-5"><div className="card" style={styles.margin}>
        <div className="card-header text-white bg-dark mb-3">
        <h5 className="card-title">{props.title}</h5>

        </div>
        <div className="card-body" style={styles.bdy}>
        <p className="card-text"><b>Authors: <span><i>{props.authors}</i></span></b></p>
        <a href={props.link} className="card-link">See More</a>
        <img className="card-img-left"  style={styles.img} src={props.image} alt="Card image cap" />
            <p className="card-text">{props.description}</p>
        </div>
    </div>
    <hr/>
    </div>
}

export default Card;
