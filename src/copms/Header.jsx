import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <p>Trisha's Directory App</p>
        </nav>
        <div className='btns'>
            <Link to= '/'><button>Add New Person</button></Link>
            <Link to= 'information'><button>Retrieve Information</button></Link>
        </div>
    </header>
  )
}

export default Header