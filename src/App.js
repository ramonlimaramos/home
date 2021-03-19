import React, { useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import githubstats from './variables/githubstats';


function App() {
  const [devs, setDevs] = useState(0);

  async function loadDevs() {
    const response = await api.get("/ramonlimaramos");
    response.data['techs'] = ['Go', 'Python', 'NodeJs'];
    setDevs(response.data);
  }

  loadDevs();
  
  return (
    <div id="app">
      <aside>
        <DevForm dev={devs} />
      </aside>
      <main>
        <ul>
          {githubstats.map(stat => (  
            <DevItem key={stat._id} stat={stat} />
          ))}
        </ul>
      </main>
    </div>
  );
}
 
export default App;
