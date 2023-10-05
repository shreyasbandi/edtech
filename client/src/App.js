import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Html from './pages/html';
import Reac12 from './pages/Reac12';
import Mongo from './pages/Mongo';
import Chat from './pages/chat';
import Video from './pages/video';


const App = () => {
	return (
		
	<BrowserRouter>
	<Routes>
      <Route path="/Basic" element={<Basic/>}></Route>
	  <Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register/>} />
		<Route path="/home" element={<Home/>} />
		<Route path="/html" element={<Html/>} />
		<Route path="/reac12" element={<Reac12/>} />
		<Route path="/mongo" element={<Mongo/>} />
		<Route path="/chat" element={<Chat/>} />
		<Route path="/video" element={<Video/>} />
	  </Routes>
      </BrowserRouter>
		
	)
}

export default App