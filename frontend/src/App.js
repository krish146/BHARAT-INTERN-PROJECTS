import styled from 'styled-components';
import {useState,useMemo} from 'react'

import bg from './img/bg.png'
import {MainLayout} from './styles/Layout'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Dashboard/BoardIncome';
import Expenses from './components/Dashboard/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active,setActive] =useState(1);
  
 const orbMemo=useMemo(()=>{
      return <Orb/>
 },[])

  const displayData= () =>{
     switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
     }
  }
  // const {hello}=useGlobalContext()
  // console.log(hello)
//Passing props from styled component to dynamically assign value in template literal
  return (
    <AppStyled bg={bg} className="App"> 
    {orbMemo}
     <MainLayout>
      <Navigation active={active} setActive={(setActive)} />
      <main>
         {displayData()}
      </main>
     </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height:100vh;
background-image: url(${props=>props.bg});
main{
flex:1;
 background: white;
  backdrop-filter:blur(10px);
  border-radius: 15px;
  border : 4px solid white;
}`;


export default App;
