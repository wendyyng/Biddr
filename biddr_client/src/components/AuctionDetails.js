import dateFormat from 'dateformat';

function AuctionDetails(props) {
  let currentPrice = 0
  if(props.bids.length){
    currentPrice = Math.max(...props.bids)
  }

    return(
       <div className="container shadow mb-3 bg-white rounded" id="auction-show-container" >
        <div className="p-5">
          <img className="card-img-top text-center" src={props.img_url} style={{maxWidth: "50em"}}/>
        <h2 className="pt-3">{props.title}</h2>
        <p>{props.description}</p>
        {/* <p>Reserve price: ${props.reserve_price}</p> */}
        <h3>Details:</h3>
        <h5>Current price: <span className="badge bg-success text-light">${currentPrice}</span></h5>
        <h5>Ends at: {dateFormat(props.ends_at, "mmmm dS, yyyy")}</h5>
        <h5>Status: {currentPrice < props.reserve_price ? "Reserve price not met": "Reserve price met"}</h5>
      </div>
      </div>
    )
  }
  
  export default AuctionDetails;