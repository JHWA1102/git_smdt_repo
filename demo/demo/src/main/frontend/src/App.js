import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("hello")
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