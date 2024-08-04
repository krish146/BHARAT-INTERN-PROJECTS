import {useState} from 'react'
import styled from 'styled-components'
import image1 from '../../img/image1.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';


const Navigation = ({active,setActive}) => {
 
  return (
    <NavStyled>
        <div className="user-con">
            <img src={image1} alt=""  />
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p> 
            </div>
        </div>

        <ul className="menu-items">
                 {menuItems.map((item)=>{
                    return <li key={item.id} onClick={()=>setActive(item.id)} className = { active === item.id?'active':''}>
                             {item.icon} <span> {item.title} </span>
                    </li>
                 })}
        </ul>

        <div className="bottom-nav">
            <li>
               {signout} Sign out
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    height:100%;
    width:374px;
    padding: 2rem 1.5rem;
    border: 3px solid white;
    background: white;
    backdrop-filter:blur(4.5px);

    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:2rem;

    .user-con{
    height:100px;
    display:flex;
    align-items:center;
    gap:1rem;
    }

    img{
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
    }

    .menu-items{
    flex:1;
    display:flex;
    flex-direction:column;
      li{
      display:grid;
      grid-template-columns:40px auto;
      cursor:pointer;

      position: relative;
      
      margin: .6rem 0;
      font-weight:500;

      padding-left:1rem;

      transition: all .4s ease-in-out;
      color :grey;
      }
    }

    .active{
        color: rgba(34, 34, 96, 1);
        i{
            color: rgba(34, 34, 96, 1);
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation
