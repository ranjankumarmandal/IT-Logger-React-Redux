import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechLogModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
  useEffect(() => {
    // initialize materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechLogModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
