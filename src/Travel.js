import React from "react";

const Travel = ({destination, country, distance, photo }) => (
    <div>
        <h3>{destination}</h3>
        <h4>{country}</h4>
        <h5>{distance}</h5>
        <figure>
            <img src={photo} />
        </figure>
    </div>
);

export default Travel;