 //import logo from './logo.svg';
 import './App.css';
import HomePage from './pages/HomePage';
import FileAttach from './pages/FileAttach'
import Result from './pages/Result'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './pages/ProductCards';

 function App() {
   return (
     <div className="App">
        <header className="App-header">
       <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/FileAttach" element={<FileAttach />} />
                <Route path="/FileAttach/Result" element={<Result />} />  
                <Route path="/FileAttach/ProductCard" element={ <ProductCard />}/>          
            </Routes>
        </Router>
      </header>
      
        {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>  */}
      
     </div>
   );
 }

 export default App;
