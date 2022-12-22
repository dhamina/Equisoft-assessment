import { useState } from 'react';
import './App.css';
import AppComponent from './components/AppComponent/AppComponent';
import Button from './components/Button/Button';

function App() {
  const [instance,setinstance] = useState([0])
  
  const onCreateInstanceHandler = () =>{
    setinstance(instance.concat(0))
  }
  return (
    <div className="App">
      <div className='app__cn'><Button id='small' label="Create Instance" onClick={onCreateInstanceHandler} />  </div>
      {
        instance.map((r,index)=>{
          return <div key={index} ><AppComponent/> </div>
        })
      }
      
    </div>
  );
}

export default App;
