import React from 'react'
import './App.css'
import Header from './Header'
import { MainBoard, CategorySect } from './main'
import useTwitchAuth from './Use_Twitch_Token';
import { useEffect } from 'react';
function App() {
  const { authWithTwitch } = useTwitchAuth();
  useEffect(() => {
    getTwitchAuth();
  }, []);

  const getTwitchAuth = async () => {
    await authWithTwitch();
  };
  return (
    <>
      <React.StrictMode>
        <Header />
        <MainBoard />
        <CategorySect />
      </React.StrictMode>
    </>
  )
}

export default App
