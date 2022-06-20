const Card = () => {
  return(
    <div className="card">
      <img src="./katie.jpeg" alt="" className="card-img"/>

      <div className ="card-data">
        <img src="./star.png" alt=""/>
        <span> 5 </span>
        <span> (30) </span>
        <span> .USA </span>
      </div>

      <div className="card-body">
        <p> Life lessons with Katie </p>
        <p> From $136 / person </p>
      </div>
    </div>
  )
}

export default Card

