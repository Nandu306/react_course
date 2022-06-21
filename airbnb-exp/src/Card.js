const Card = (props) => {

  console.log(props);

  let badgeText
  if (props.element.openSpots === 0) {
      badgeText = 'SOLD OUT'
  } else if (props.element.location === "Online") {
      badgeText = 'ONLINE'
  }

  return(
      <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`./${props.element.coverImg}`} alt="" className="card-img"/>
        <div className ="card-data">
          <img src="./star.png" alt=""/>
          <span> {props.element.stats.rating} </span>
          <span className="gray"> ({props.element.stats.reviewCount}) </span>
          <span className="gray"> .{props.element.location} </span>
        </div>

        <div className="card-body">
          <p> {props.element.tagline} </p>
          <p> From <b>${props.element.price}</b> / person </p>
        </div>
      </div>
  )
}

export default Card

