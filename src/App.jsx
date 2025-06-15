import { useState } from 'react'
import './App.css'
import Cards from './components/cards'

const cardData = [
  {
    title: "Alexandre Pantoja",
    image: "https://ufc.com/images/styles/inline/s3/2025-01/5/PANTOJA_ALEXANDRE_BELT_12-07.png?itok=bTsTyR7B",
    description: "Flyweight Champ",
    link: "https://www.ufc.com/athlete/alexandre-pantoja"
  },
  {
    title: "Merab Dvalishvili",
    image: "https://ufc.com/images/styles/inline/s3/2025-06/DVALISHVILI_MERAB_BELT_06-07.png?itok=Q618Xr6J",
    description: "Bantamweight Champ",
    link: "https://www.ufc.com/athlete/merab-dvalishvili"
  },
  {
    title:"Alexander Volkanovski",
    image:"https://ufc.com/images/styles/inline/s3/2024-02/VOLKANOVSKI_ALEXANDER_BELT_02-17.png?itok=JL7vKt3v" ,
    description:"the goat" ,
    link:"https://www.ufc.com/athlete/alexander-volkanovski"

  },
    {
    title:"Islam Makhachev",
    image:"https://ufc.com/images/styles/inline/s3/2025-01/7/MAKHACHEV_ISLAM_BELT_01-18.png?itok=S-aY39p8",
    description:"vacated UFC Lightweight Champion.",
    link:"https://www.ufc.com/athlete/islam-makhachev"

  },
    {
    title:"Jack Della Maddalena",
    image:"https://ufc.com/images/styles/inline/s3/2025-05/DELLA_MADDALENA_JACK_BELT_05-10.png?itok=0Kf4B41E",
    description:"Hates m&M's",
    link: "https://www.ufc.com/athlete/jack-della-maddalena"

  },
    {
    title:"Dricus Du Plessis",
    image:"https://ufc.com/images/styles/inline/s3/2025-02/DU_PLESSIS_DRICUS_BELT_02-08.png?itok=cXBgLUqR",
    description:"Self proclaimed first African champion",
    link:"https://www.ufc.com/athlete/dricus-du-plessis"

  },
    {
    title:"Magomed Ankalaev",
    image:"https://ufc.com/images/styles/inline/s3/2025-03/ANKALAEV_MAGOMED_BELTMOCK.png?itok=ptzvKJ3h",
    description:"broke my heart",
    link:"https://www.ufc.com/athlete/magomed-ankalaev"

  },
    {
    title:"Jon Jones",
    image:"https://ufc.com/images/styles/inline/s3/2025-01/5/JONES_JON_BELT_11-16.png?itok=mCioZKce",
    description:"Not my champ",
    link:"https://www.ufc.com/athlete/jon-jones"

  },
    {
    title:"Zhang Weili",
    image:"https://ufc.com/images/styles/inline/s3/2025-02/ZHANG_WEILI_BELT_02-08.png?itok=gW1566iJ",
    description:"I think shes cool",
    link:"https://www.ufc.com/athletes#:~:text=%22MAGNUM%22-,ZHANG%20WEILI,-26%2D3%2D0"

  },
    {
    title:"Valentina Shevchenko",
    image:"https://ufc.com/images/styles/inline/s3/2025-05/SHEVCHENKO_VALENTINA_BELT_05-10.png?itok=mEunz16d",
    description:"Womens PFP champ",
    link:"https://www.ufc.com/athlete/valentina-shevchenko"

  }
]


function App() {
  //const [count, setCount] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const handleNext = () => {
    setCardIndex((prevIndex) => Math.min(prevIndex + 1, cardData.length - 1));
  };
  const handlePrev = () => {
    setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <>
      <h1>UFC records</h1>
      <h3>A collection of the ufc's current champs</h3>
      <h4>Fighter #  {cardIndex + 1}</h4>
        <Cards
          title={cardData[cardIndex].title}
          image={cardData[cardIndex].image}
          description={cardData[cardIndex].description}
          link={cardData[cardIndex].link}
        />
      <button onClick={handlePrev} disabled={cardIndex===0}>&larr;</button>
      <button onClick={handleNext} disabled={cardIndex === cardData.length -1}>&rarr;</button>
    </>
  )
}

export default App
