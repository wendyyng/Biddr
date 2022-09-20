import dateFormat from 'dateformat';

const BidDetails = (props) => {
  const {bid_price, created_at} = props
  return(
    <div>
      <h5><span className="badge bg-success text-light">${bid_price}</span> on {dateFormat(created_at, "mmmm dS, yyyy")}</h5>
    </div>
  )
}

export default BidDetails