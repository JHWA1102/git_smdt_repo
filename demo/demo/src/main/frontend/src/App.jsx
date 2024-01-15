import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';

export default class DashBoard extends Component {
    constructor(props){
        super(props);
    }
    dateClick=(info)=>{
        alert(info.dateStr)
    }
    render() {
        return(
            <>
            <div style={{ margin:15, display:'grid',gridTemplateColumns:"2fr 1fr"}}>
                <FullCalendar   
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'today', 
                            center: 'title',
                            end: 'prev,next' 
                        }
                    }
                    height={"85vh"}
                    dateClick={this.dateClick}
                    events={[{title:'판매건수 : 23건', date:'2023-05-11',},{title:'판매건수 : 23건',date:'2023-05-13',}]}
                />
            </div>
            </>     
        );
    }
}


/*
import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);

  return(
    <div>
        <div>시작</div>
        <ul>
            {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
        </ul>
    </div>
  );
}

export default App;
*/
/*
import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState([]);

  return (

    <>
    
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
*/