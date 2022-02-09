import React, { useState,useEffect } from 'react';

const Card = (props) => {
  const [cardData, setCardData] = useState(props.props);

  const setMin = (e) => {
    setCardData({ ...cardData, min: e.target.value });
  }

  const setMax = (e) => {
    setCardData({ ...cardData, max: e.target.value });
  }

  // console.log(props.props.time); 
  // console.log(props.index);
  // console.log(cardData);


  useEffect(()=>{
    function submitData(){
      props.setTimeObj((oldArray) => [
        ...oldArray,cardData
       ])
    }
    submitData();
  },[cardData])

  // submitData();
  return <div className='card-container'>
    <h4>{props.props.time}</h4>
    <select name="weather" id="weather">
      <option value="sunny">Sunny</option>
      <option value="cloudy">Cloudy</option>
      <option value="rain">Rain</option>
    </select>
    <input type="number" onChange={setMin} placeholder='Minimum' />
    <input type="number" onChange={setMax} placeholder='Miximum' />
  </div>;
};

export default Card;