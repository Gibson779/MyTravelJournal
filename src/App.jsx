import './App.css'
import Main from "./components/Main"
import Header from "./components/Header"
import Entry from "./components/Entry"

function App() {
 

  return (
      <>
            <Header />
            <main className="container">
                <Entry 
                img="../images/montenagro.JPG"
                name="Kotor"
                img2="../images/pin.png"
                location = "Montenagro"
                link = "https://www.google.com/maps/place/Kotor,+Montenegro/@42.4242999,18.7705761,1805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x134c33063d70c91b:0x7a73f15e212e9306!8m2!3d42.424662!4d18.771234!16zL20vMDFwam4w?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                date= "12 June, 2025 - 19 June, 2025"
                information="I visited Kotor, Montenegro in July 2025. This beautiful coastal town is famous for its stunning Adriatic scenery, where dramatic mountains meet the sea. Kotor boasts a well-preserved medieval old town, filled with narrow cobblestone streets, charming traditional restaurants, and popular tourist spots that attract over two million visitors each year.
                            During our trip, we took the famous cable car up into the mountains, where we enjoyed breathtaking views and even rode a small roller coaster at the summit. There are plenty of activities in and around Kotor, along with many shops, cafés, and restaurants to explore.
                            Overall, it was an amazing experience—a perfect mix of nature, history, and culture—and a destination I would highly recommend to anyone visiting Montenegro. "
                />

                
              <Entry
                img="../images/Bulgaria.jpg"
                name="Borovets"
                img2="../images/pin.png"
                location = "Bulgaria"
                link = "https://www.google.com/maps/place/2010+%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B5%D1%86,+Bulgaria/@42.2724875,23.5855834,7246m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14ab3c9b6660506b:0xa00a014cd0f8790!8m2!3d42.2706675!4d23.6056165!16zL20vMDloem1n?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D"
                date= "1 January, 2025 - 7 January, 2025"
                information="Bulgaria’s Rila Mountains, Borovets, is one of the country’s most popular ski resorts. It was our first skiing trip, where we not only learned to ski but also had the chance to enjoy local food, culture, and the mountain atmosphere. We even reached the top of the Rila Mountains, at an impressive altitude of about 2,500 meters."
              
              />
              <Entry
                img="../images/Mallorca.JPG"
                img2="../images/pin.png"
                name="Cal'a Dor"
                location = "Mallorca"
                link = "https://www.google.com/maps/place/Cala+d'Or,+Balearic+Islands,+Spain/@39.3698163,3.2074569,7570m/data=!3m2!1e3!4b1!4m6!3m5!1s0x129650c363e848bb:0xa02af717f574100!8m2!3d39.372606!4d3.22914!16s%2Fm%2F027dfzz?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D"
                date= "13 September, 2025 - 20 September, 2025"
                information="Cala d’Or is a picturesque resort on Mallorca’s southeast coast, known for its whitewashed buildings, stylish marina, and series of small sandy coves like Cala Gran and Cala Esmeralda. It offers a relaxed, family-friendly atmosphere with plenty of restaurants, bars, and shops, plus water sports and boat trips from the harbor. The area is more peaceful than Mallorca’s party resorts, making it ideal for couples and families. It’s about a 45–60-minute drive from Palma Airport."
              
              />
              
              <Entry
                img="../images/lagos.jpg"
                img2="../images/pin.png"
                location = "Portugal"
                name="Lagos"
                link = "https://www.google.com/maps/place/Lagos,+Portugal/@37.1152515,-8.7654046,31234m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd1b304950234d8d:0x5410aaa3471afc57!8m2!3d37.1027881!4d-8.6730275!16zL20vMDI4anhq?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D"
                date= "2 July, 2024 - 9 July, 2024"
                information="Lagos is a historic coastal town in Portugal’s Algarve region, famous for its stunning cliffs, golden beaches, and cobbled old town streets. Highlights include Praia Dona Ana and Ponta da Piedade, known for dramatic rock formations and turquoise waters. The town blends a relaxed beach vibe with vibrant nightlife, great seafood restaurants, and rich maritime history. Lagos is ideal for couples, families, and surfers alike, offering both scenic beauty and cultural charm, about 1.5 hours’ drive from Faro Airport."
              
              />

            </main>
        </> 
  )
}

export default App;
