import React from "react";

const Travel = ({destination, country, photo }) => (
    <div>
        <h3>{destination}</h3>
        <h4>{country}</h4>
        <figure>
            <img src={photo} />
        </figure>
    </div>
);

export default Travel;