import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NavLogo from './components/NavLogo';
import Safety from './components/Safety';
import InfoArea from './components/InfoArea';
import Footer from './components/Footer';
import axios from 'axios';

<pre>{process.env.API_KEY}</pre>

function App() {

  const [rootstopNumber, setRootStopNumber] = useState();
  const [items, setItems] = useState([])
  // const [setStopNumber, setStopNumber] = useState();

  useEffect(() => {
    axios.get(`https://api.translink.ca/rttiapi/v1/stops/60980/estimates?apikey=dxHQdGLthXll9hYpXR64&count=3&timeframe=120`)
    .then((response) => {
      console.log(response["data"]);
      setItems(response["data"]);
    })
  }, [])

  const callAPI = () => {
    axios.get(`https://api.translink.ca/rttiapi/v1/stops/${rootstopNumber}/estimates?apikey=dxHQdGLthXll9hYpXR64&count=3&timeframe=120`)
      .then((response) => {
        console.log(response["data"]);
        setItems(response["data"]);
    })
  
  }

  return (
    <div>
      <NavLogo />
      <Header 
        rootstopNumber={rootstopNumber}
        setRootStopNumber={setRootStopNumber}
        callAPI={callAPI}
      />
      <Safety />
      <InfoArea 
        items={items}
      />
      <Footer />
    </div>
  )
}

export default App