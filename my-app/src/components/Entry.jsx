export default function Entry () {
    return(

        <article className="journal-entry">
         <div className="main-image-container">
            <img className="main-image" src="../images/montenagro.JPG" alt="montenagro" />
            </div>
           <div className="info-container">
             <img className="marker" src="../images/pin.png" alt="marker"  />
            <span className="country">Montenagro</span>
             <a href="https://www.google.com/maps/place/Kotor,+Montenegro/@42.4242999,18.7705761,1805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x134c33063d70c91b:0x7a73f15e212e9306!8m2!3d42.424662!4d18.771234!16zL20vMDFwam4w?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
             <h2 className="entry-title">Kotor</h2>
            <p className="trip-dates">12 July, 2025 - 24 July, 2025</p>
            <p className="entry-text">Kotor, Montenegro, is a stunning coastal town set on the Adriatic Sea, famous for its well-preserved medieval old town, winding stone streets, and dramatic bay surrounded by steep mountains. Enclosed by ancient Venetian walls, Kotor offers a blend of history, culture, and breathtaking scenery — a UNESCO World Heritage Site that feels like a step back in time.</p>
            </div>     
            </article>
     
    )
}