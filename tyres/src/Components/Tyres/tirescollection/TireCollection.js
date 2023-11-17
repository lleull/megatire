import React from 'react'
import Dummy_tires from '../../UI/ListOfTyres'
import Tiremenu from '../tiremenu/tiremenu'
import './TireCollection.css'
import Card from '../../UI/Cart'
const TireCollection = (props) => {


const Tireitems = Dummy_tires.map((tire) =>  <Tiremenu  key={tire.id} id={tire.id}  name={tire.name}  vechile={tire.vehicle} rim={tire.Rim_Diam} size={tire.Size} image={tire.image} price={tire.price} tire={tire.tyre_type} /> )
  return (
    <ul className='tirescollection'>
     
      <Card>
      <h1 className='texttag'>TIRES COLLETION</h1>{Tireitems}</Card>
      
    </ul>
  )
}

export default TireCollection
