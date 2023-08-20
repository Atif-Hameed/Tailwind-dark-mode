import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [theme, setTheme] = useState(null)

  useEffect( () => {
    
    if( window.matchMedia('(prefers-color-scheme:dark)').matches ){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }

  }, [] )

  
  useEffect( () => {
    
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } 
    else{
      document.documentElement.classList.remove("dark")
    }

  }, [theme] );

  const handleThemeSwitch = () => {
    setTheme( theme === "dark" ? "light" : "dark")
  }

 
  return (
    <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
      <button onClick={handleThemeSwitch} className='p-2 bg-green-500 text-xl rounded-lg' >Dark Mode</button>
    </div>
  );
}

export default App;
