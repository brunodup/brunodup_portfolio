import {useState} from 'react';

function Countdown() {
  const [number,setNumber] = useState(0);

  function addCountdown() {
    setNumber(number + 1)
  }

  return (
    <>
    <div>{number}</div>
    <button onClick={addCountdown}>Aumenta</button>
    </>
  )
}

export default Countdown;