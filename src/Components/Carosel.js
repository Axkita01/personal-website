
import React from 'react';
import { useEffect, useReducer } from 'react';
import '../Styles/Carosel.css'


const pictures = [
  require('../assets/pic1.jpg'),
  require('../assets/pic2.jpg'),
  require('../assets/pic3.jpg')
]

function reducer(state, action) {
    let copy = state.slice()
    let n = copy.pop()
    copy.unshift(n)
    return copy
}
export default function Carosel () {
  const [picState, dispatch] = useReducer(reducer, pictures)

  console.log(picState)
  useEffect(() => {
    let s = setInterval(() => {dispatch({type: 'shift'})}, 7000)
    return () => {clearInterval(s)}
  }, [])

  var items = picState.map((element, index) => { 
    return (
    <li key = {index.toString()} className = { (index !== 1) ? 'image-container': 'middle-pic'}
    id = {'o' + index.toString()}>
      <img src = {element}/>
    </li>
  )})

  return (
      <ul className = 'pic-items'>
        {items}
      </ul>
    
  );
}