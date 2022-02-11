import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from './Home/Home'
import BugsLibrary from './BugsLibrary/BugsLibrary'
import FishLibrary from './FishLibrary/FishLibrary'
import DivingLibrary from './DivingLibrary/DivingLibrary'
import CaughtLibrary from './CaughtLibrary/CaughtLibrary'

function App() {
  return (
    <div className="App">
      <nav>
          <div className='center-logo'>
              <img className='logo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8fe0719-55c2-4775-9ea5-fa68ad28d089/dd98bnh-cdaa0e7e-c5f1-45f9-99fb-5a22d3c2974b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZmUwNzE5LTU1YzItNDc3NS05ZWE1LWZhNjhhZDI4ZDA4OVwvZGQ5OGJuaC1jZGFhMGU3ZS1jNWYxLTQ1ZjktOTlmYi01YTIyZDNjMjk3NGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H5-GEp9jfOrDQHz79paU8SrDzpRUBT1_lw85MCM2Ra8' alt='logo' />
              <h1 className='title'><Link className='nav-links' to='/' onClick={() => handleClick()}>Critterpedia</Link></h1>
          </div>
          <div className='nav-bar'>
              <h2><Link className='nav-links' to='/bugs' onClick={() => handleClick()}>Bugs</Link></h2>
              <h2><Link className='nav-links' to='/fish' onClick={() => handleClick()}>Fish</Link></h2>
              <h2><Link className='nav-links' to='/diving' onClick={() => handleClick()}>Diving</Link></h2>
              <h2><Link className='nav-links' to='/caught' onClick={() => handleClick()}>Caught</Link></h2>
          </div>
      </nav>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bugs' element={<BugsLibrary/>} />
            <Route path='/fish' element={<FishLibrary/>} />
            <Route path='/diving' element={<DivingLibrary/>} />
            <Route path='/caught' element={<CaughtLibrary/>} />
          </Routes> 
        </div>
    </div>
  );
}

export default App;
