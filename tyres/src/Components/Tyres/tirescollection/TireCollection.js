import React from 'react'
import Dummy_tires from '../ListOfTyres'
import Tiremenu from '../tiremenu/tiremenu'
import './TireCollection.css'
const TireCollection = () => {


const Tireitems = Dummy_tires.map((tire) =>  <Tiremenu id={tire.id} name={tire.name} vechile={tire.vehicle} rim={tire.Rim_Diam} size={tire.Size} image={tire.image} price={tire.price} tire={tire.tyre_type} /> )
  return (
    <ul className='tirescollection'>
      <h1 className='texttag'>TIRES COLLETION</h1>
      {Tireitems}
    </ul>
  )
}

export default TireCollection
