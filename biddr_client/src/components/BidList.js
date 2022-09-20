import BidDetails from "./BidDetails";

export default function BidList(props) {
  const bids = props.list
  console.log(bids)

  // const bidDescending = [...bids].sort(((a, b) => b.bid_price - a.bid_price))

  return(
    <div className="container shadow p-5 mb-5 bg-white rounded">
      <h2><u>Previous Bids</u></h2>
      <div>
        {
          bids ?
          [...bids]
          .sort(((a, b) => b.bid_price - a.bid_price))
          .map((b,i) => {
            return <BidDetails key={i} 
            bid_price={b.bid_price}
            created_at={b.created_at}
            id={b.id}
            />
          })
          :
          null
        }
      </div>
    </div>
  )
}