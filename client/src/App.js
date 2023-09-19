import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    // Make an API call to your server-side to fetch data
    axios.get('https://vc-system-wm9n.vercel.app/api/client')
      .then((response) => {
        setDataFromServer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from the server:', error);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen data={dataFromServer} />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;