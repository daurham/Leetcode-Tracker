import axios from 'axios';
import React, { useState, useEffect, useMemo, useContext, createContext } from 'react';
import App from './components/App';


const StatData = createContext();
export const useData = () => useContext(StatData);

export default function Context() {
  const [stats, setStats] = useState();

  const getData = () => {
    axios.get('/track/')
      .then(res => setStats(() => res.data))
      .catch(console.log);
  };

  const value = useMemo(() => ({
    stats, setStats, getData
  }), [stats]);
  return (
    <>
      <StatData.Provider value={value}>
        <App />
      </StatData.Provider>
    </>
  );
};