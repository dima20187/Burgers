import React from 'react'
import './styles/App.css'
import { Footer } from './components/Main/Components/Footer'
import { Header } from './components/Main/Components/Header';
import { NavigateContainer } from './navigation/NavigationContainer';

const App = () => {
  return (
    <div className='App'>
     <div className='appa' >
        <div className='header'>
        <Header/>
       </div> 
       <div className='content' >
        <NavigateContainer/>
        </div> 
          <div className='footerr' >
         <Footer/> 
      </div>
      </div>
    </div>
  )
}
export {App}

