import React, {useState} from 'react'

function UseState() {

    let [count, setCount] = useState(0)
    let [car, setCar] = useState({
        carName: 'hyundai',
        brand: 'Elantra',
        model: '2018',
        status: 'new'
    });

   function increment () {
      setCount((x)=> x + 1)
    }

    function brandChanger () {
        // setCar({brand:'appache'}) its not recommended way

        setCar((prevState)=>{
            return {
                ...prevState, brand: 'toyota',
            }
        })
    }

  return (
    <div>
      <h1>{count} </h1>
      <button onClick={increment}>Add</button>
      <h1>{car.brand} </h1>
      <button onClick={brandChanger}>Change Brand</button>
    </div>
  );
}

export default UseState