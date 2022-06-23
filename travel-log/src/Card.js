import LocationOn from './location_on.jsx'


const Card = (props) => {
  console.log(props)
  return(
    <div>
      <div className="card">
        <div>
          <img src={props.element.img} alt="" className="main-img"/>
        </div>

        <div className="space"></div>

        <div className="align-left">
          <div className="flex-left">
            <div className="flex-center">
              <LocationOn/>
              <p className="location-text card-text"> {props.element.location.toUpperCase()} </p>
            </div>
            <a href="www.google.com" className="card-text">{props.element.map}</a>
          </div>

          <h1> {props.element.locationname}</h1>
          <p className="card-text"> <b> {props.element.date} </b> </p>
          <p className="card-text">
          {props.element.description}
          </p>

        </div>
      </div>
    </div>

  )
}

export default Card



// const Card = () => {
//   return(
//     <div>
//       <div className="card">
//         <div>
//           <img src="https://source.unsplash.com/WLxQvbMyfas" alt="" className="main-img"/>
//         </div>

//         <div className="space"></div>

//         <div className="align-left">
//           <div className="flex-left">
//             <div className="flex-center">
//               <LocationOn/>
//               <p className="location-text card-text"> JAPAN </p>
//             </div>
//             <a href="www.google.com" className="card-text">View on Google Maps</a>
//           </div>

//           <h1> Mount Fiji </h1>
//           <p className="card-text"> <b> 12 Jan, 2021 - 24 Jan, 2021 </b> </p>
//           <p className="card-text">
//           Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
//           (12,380 feet). Mount Fuji is the single most popular tourist site in
//           Japan, for both Japanese and foreign tourists.
//           </p>

//         </div>
//       </div>
//     </div>

//   )
// }

// export default Card
