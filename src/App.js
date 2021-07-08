import logo from './logo.svg';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';
import {useState} from "react";


function App() {
  let [dark,setState] = useState(true);
  return (
    <div id ="App" className={dark?"App":"App-light"}>
      <Header changeBackGround={()=>{
        setState(!dark);
      }}></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
