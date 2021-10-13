import Newtask from "./components/Newtask";
import Describe from "./components/Describe";
import Setting from "./components/Setting";
import Suggest from "./components/Suggest";
import Post from "./components/Post";
import Foot from "./components/Foot";
import React from "react";
function App() {
  const [Rstate, setRstate] = React.useState(2);
  const changeR = (data) => {
    console.log(data);
    setRstate(data)
  }
  const [finish, setFinish] = React.useState('0')
  const [title, setTitle] = React.useState('');
  const [des, setDes] = React.useState('');
  const [date, setDate] = React.useState('');
  const [suburb, setSuberb] = React.useState('');
  const [suggest, setSuggest] = React.useState('');
  const [number, setNumber] = React.useState('');
  const post = () => {
    if (finish == 1) {
      fetch('http://localhost:8000/newtask', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: Rstate,
          title: title,
          des: des,
          suburb: suburb,
          date: date,
          suggest: suggest,
          number: number
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
          console.log("Error:" + err)
        })
    } else {
      console.log('test')
    }
  }

  return (
    <div className="App">
      <Newtask state={Rstate} changeR={(data) => { changeR(data) }} />
      <Describe title={(title) => { setTitle(title) }} des={(des) => { setDes(des) }} />
      <Setting state={Rstate} date={(date) => { setDate(date) }} suburb={(suburb) => { setSuberb(suburb) }} />
      <Suggest suggest={(suggest) => { setSuggest(suggest) }} number={(number) => { setNumber(number) }} />
      <Post post={(data) => { post(); setFinish(data) }} />
      <Foot />
    </div>
  );
}

export default App;