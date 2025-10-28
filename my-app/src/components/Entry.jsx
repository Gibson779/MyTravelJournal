export default function Entry (props) {
    console.log(props)
    return(

        <article className="journal-entry">
         <div className="main-image-container">
            <img className="main-image" src={props.img} alt="montenagro" />
            </div>
           <div className="info-container">
             <img className="marker" src="../images/pin.png" alt="marker"  />
            <span className="country">{props.name}</span>
             <a href= {props.link}>View on Google Maps</a>
             <h2 className="entry-title">{props.location}</h2>
            <p className="trip-dates">{props.date}</p>
            <p className="entry-text">{props.information}</p>
            </div>     
            </article>
     
    )
}