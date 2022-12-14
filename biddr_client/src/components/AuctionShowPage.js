import React, { Component } from 'react'
import { Auction } from '../requests'
import AuctionDetails from "./AuctionDetails";
import { useState, useEffect } from 'react';
import BidList from "./BidList";

import NewBidForm from './NewBidForm';

export default function AuctionShowPage(props)  {
    const [ auction , setAuction ] = useState({})

    useEffect(() => {
        console.log(props.match.params.id)
        Auction.show(props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
        .then((fetchedAPIauction) => {
          setAuction(fetchedAPIauction)
        })
      }, [])
      const { id, title, description, reserve_price, created_at, ends_at, bids, img_url } = auction
      let bids_arr = []

      if(bids){
        bids.map(bid => bids_arr.push(bid.bid_price))
      }

  return (
    <div className='container my-4'>
       <div className="row d-flex justify-content-center align-items-start mt-4 mx-0">

        <div className="col-7">
   
        <AuctionDetails
         title={title}
         description={description}
         reserve_price={reserve_price}
         created_at={created_at}
         ends_at={ends_at}
         bids={bids_arr}
         img_url={img_url}
        />

    
      </div>
      <div className="col-5">
        <NewBidForm  id={id} bids={bids_arr}/>
        <BidList  list={auction.bids}/>

      </div>
    </div>
    </div>
  )
}
