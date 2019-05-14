import React from "react";
// src/Quotes.js
import Travel from "./Travel"

const travels = [
    {
        destination: "Planvour",
        country: "France",
        photo: "https://www.ploemeur.com/wp-content/themes/ploemeur/thumb/timthumb.php?src=https://www.ploemeur.com/wp-content/uploads/2016/07/plage_fort-bloque-2-alex.jpg&w=800&h=500&zc=1",
        distance: "2 h de route"
    },
    {
        destination: "Hanoi",
        country: "Vietnam",
        photo: "https://www.travelsense.asia/wp-content/uploads/2017/07/hanoi-vietnam-halong-bay-4.jpg",
        distance:"Loin km"
    },
    {
        destination:"Oakland",
        country:"N-Z",
        photo:"https://media.cntraveler.com/photos/5b9965e47009626e21e1e1aa/master/pass/Oakland_GettyImages-895763946.jpg",
        distance:"Encore plus loin je crois km"
    },
    {
        destination:"Paris",
        country:"France",
        photo:"https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20905/208cfcc257a889002227594b5fd7a9ae.jpg?ver=1477298085",
        distance:"ça, ça va, c'est pas loin mais c'est nul quoi "
    },
    {
        destination:"Saint-bernard sur seine",
        country:"France - Creuse",
        photo:"http://2.bp.blogspot.com/_e36PkrPhSaU/TPs6F99tmsI/AAAAAAAAADg/_VCi00ZNX5E/s1600/oulk.jpg",
        distance:"Pas loin"
    },
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destination={travel.destination} photo={travel.photo} country={travel.country} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;