import './game.css'
import happy from '../assest/images/happy.jpg'
import unhappy from '../assest/images/unhappy.jpg'
import start from '../assest/images/start.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'


const Game = () => {
  
  const [randomNum, setNum] = useState([randomNumberInRange(1, 100), randomNumberInRange(1, 100), randomNumberInRange(1, 100)]);
  const [answer, setAnswer] = useState(randomNumberInRange(0, 2));
  const [image, setImage] = useState(start);
  const [correct, setCorrect] = useState(0);
  const [Wrong, setWrong] = useState(0);
  const [active, setActive] = useState(false);


  function randomNumberInRange (min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min; }


  const Restart = () => {
      setNum([randomNumberInRange(1, 100), randomNumberInRange(1, 100), randomNumberInRange(1, 100)]);
      setAnswer(randomNumberInRange(0, 2));
      setImage(start);
      let btnsArr = document.querySelectorAll(".btnsName");
      for (let i = 0; i < btnsArr.length; i++) {
          btnsArr[i].style.backgroundColor = '#372948';
      }

      setActive(false);

  }
  const ExpectedAnswer = (index) => {
      setActive(true);

      if (index === answer || index === answer || index === answer) {
          setImage(happy);
          setCorrect(() => correct + 1);
          const result = correct;
          console.log("correct answer", result);
      }
      else {
          setImage(unhappy);
          setWrong(() => Wrong + 1);
          const result = Wrong;
          console.log("wrong answer", result);
      }

      let btnsArr = document.querySelectorAll('.btnsName')
      for (let i = 0; i < btnsArr.length; i++) {
          if (i === answer) {
              btnsArr[i].style.backgroundColor = "green";
          }
          else {
              btnsArr[i].style.backgroundColor = "red";
          }
      }
  }

  return (
    <>
      <div className='gameContainer'>

        <div className='header'>
          <h2 className='title'>Random Number Gusser</h2>

          <div className='score'>
            <span>correct : {correct}</span>
            <span className='position'><FontAwesomeIcon icon={faRefresh} size="lg" color={'#FFCACA'} onClick={Restart} /></span>

            <span>Wrong : {Wrong}</span>

          </div>
        </div>
        <br />
        <div className='container'>
          <img src={image} className="image"></img>
          <div className='container-btn'>
            <button className='btnsName' onClick={() => ExpectedAnswer(0)} disabled={active ? true : false}>{randomNum[0]}</button>
            <button className='btnsName' onClick={() => ExpectedAnswer(1)} disabled={active ? true : false} >{randomNum[1]}</button>
            <button className='btnsName' onClick={() => ExpectedAnswer(2)} disabled={active ? true : false} >{randomNum[2]}</button>
          </div>
        </div>
      </div>
    </>
  )

}
export default Game;