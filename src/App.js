import logo from './logo.svg';
import './App.css';
import User from "./user/user.component/user.component";
import {useState} from 'react'
import Cars from "./user/cars/cars.character";

let cars = [
  {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
  {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
  {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
  {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
  {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
  {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
  {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
  {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
  {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
  {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
  {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
  {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
  {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

const usersList = [
  {name: 'vasya', age: 31, isMarried: false,},
  {name: 'petya', age: 30, isMarried: true,},
  {name: 'kolya', age: 29, isMarried: true,},
  {name: 'olya', age: 28, isMarried: false,},
  {name: 'max', age: 30, isMarried: true,},
  {name: 'anya', age: 31, isMarried: false,},
  {name: 'oleg', age: 28, isMarried: false,},
  {name: 'andrey', age: 29, isMarried: true,},
  {name: 'masha', age: 30, isMarried: true,},
  {name: 'olya', age: 31, isMarried: false,},
  {name: 'max', age: 31, isMarried: true,}
];

function App() {
  let [users, setUsers] = useState(usersList)
  const deleteUser = () => {
    usersList.pop()
    setUsers([...users])
  }

  let[car,setCar]= useState(cars)
  const badCar = ()=>{
    cars.pop()
    setCar([...car])
  }

  let counter = 0;
  let [number, setNumber] = useState(counter)
  const increment = () => {
    number++
    setNumber(number)
  };
  const decrement = () => {
    number--
    setNumber(number)
  };
  const increment100 = ()=>{
    setNumber(number+=100)
  }
  const incrementMinus100 = ()=>{
    setNumber(number-=100)
  }
  const reset = ()=>{
    setNumber(number = 0)
  }
  return (
      <div>
        <div>
          <p>
            number: {number}
            <button onClick={increment}>plus</button>
            <button onClick={decrement}>minus</button>
            <button onClick={increment100}> plus100</button>
            <button onClick={incrementMinus100}> minus100</button>
            <button onClick={reset}>reset</button>
          </p>


        </div>

        <div>
          {
            usersList.map((value, index) =>

                <User key={index}
                      name={value.name}
                      age={value.age}
                      isMarried={value.isMarried}
                />
            )
          }

          <button onClick={deleteUser}>delete user</button>
        </div>

        <div>
          {
            cars.map((value, index) =>
                <Cars key={index}
                      producer={value.producer}
                      model={value.model}
                      year={value.year}
                      color={value.color}
                      type={value.type}
                      engine={value.engine}
                      volume={value.volume}
                      power={value.power}
                />)
          }
          <button onClick={badCar}>bad car</button>
        </div>
      </div>
  );
}

export default App;

