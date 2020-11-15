import React  from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Table from '../../shared/Table';

function TestComponent (){
   return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v1.png" alt="search icon"   />
}


function App() {


  return (
    <div className="App">
    
      <Header title="AlgaStock"/>
       
       <Container>
         <Table/>

       </Container>
 
      </div>
    
  );
}

export default App;
