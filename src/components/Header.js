import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css'


class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
                <h1 className='title'><img className="sofa" src='https://image.flaticon.com/icons/png/512/1966/1966790.png'/>Covid Run</h1>
                <nav>
                    <ul className="ulNav">
                        <li className="liNav"><Link className="linkNav" to='/'> Snake </Link></li>
                        <li className="liNav"><Link className="linkNav" to='/TicTac'>Tic-Tac-Toe</Link></li>
                    </ul>
                </nav>
            </div>
            )
        }
    }
  
export default Header
