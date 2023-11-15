import React from 'react'
import Input from '../../UI/Input'
import { useRef } from 'react'
import './tireform.css'

const Tireform = (props) => {
  const inputvalue= useRef()

   const handlesubmit = (e) => {
    e.preventDefault()
    // setcheckamount(true)
    const eneteredamount = inputvalue.current.value
    const addeneteredamount = +eneteredamount
    if(!eneteredamount.trim() == 0 || !eneteredamount > 5 || !eneteredamount < 1 ){
  }

   props.additemtocart(addeneteredamount)
   }
  return (
    <div>
        <form className="display"  onSubmit={handlesubmit}>
            <label className='labels'>Amount</label>
        <Input ref={inputvalue}  input= {{
            type: 'text',
            max: '5',
            min: '0',
            id: "amount",
          type: "number",
          step: "1",
          defaultValue: "1",
          
        }}  />  
        <button type='submit' className="addbutton">
          Buy Tire
        </button>      
        {/* <p>{checkamount && <p>error while shoping</p>}</p> */}
        </form>
       
        
      
    </div>
  )
}
// 
  
  

export default Tireform
