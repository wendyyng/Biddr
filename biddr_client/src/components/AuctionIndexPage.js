import React from 'react'
import { useState, useEffect } from 'react';
import { User, Auction } from "../requests";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';

export default function AuctionIndexPage () {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData)
        })
    }, [])
  return (
    <>
    <div className="container-fluid p-0" id="auctions">
    <h1 className="text-center" >Auctions</h1>
    </div>
    <div className="container p-0 ">
    <div className="container mt-3 mx-3 d-flex flex-wrap flex-row justify-content-center">
        {
        auctions.map((a,i) => {
            return (
                    <div key={i} className="card shadow m-2 mb-5 bg-white rounded my-auto col-sm-6" style={{width: "18em"}}>
                    <img src={a.img_url} className="card-img-top" alt="auction" />
                    <div className="card-body">
                        <h6 className="card-title"><Link className="fw-bold text-dark text-decoration-none" to={`/auctions/${a.id}`}>{a.title}</Link></h6>
                        <p className="card-text text-grey">Posted on {dateFormat(a.created_at, "mmmm dS, yyyy")}</p>
                        {/* <p className="card-text">{a.description}</p> */}
                    </div>
                    </div>
            )
        })  
        }
    </div>
    </div>
</>
  )
}
