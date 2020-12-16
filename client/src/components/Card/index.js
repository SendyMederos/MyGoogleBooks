import React from "react";
const styles = {
 margin :{ width: "25rem"}
}
 function Card() {
    return (
        <div class="card" style={styles.margin}>
            <img class="card-img-left" src="..." alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go!</a>
            </div>
        </div>
    );
}
export default Card;

