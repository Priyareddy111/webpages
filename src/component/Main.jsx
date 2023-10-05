import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='user fixed-top'>
            
                <h1>
                    {/* <Link to='/gotrip' className='text'> GoTrip </Link> */}
                
                <img src='https://gotrip-next.vercel.app/img/general/logo-dark.svg' alt='img'></img></h1>
                <ul className='text2'>
                <li>
                    <Link to='/' className='text1'> Home </Link>
                </li>
                <li>
                    <Link to='/categories' className='text1'> Categories </Link>
                </li>
                <li>
                    <Link to='/destinations' className='text1'> Destinations </Link>
                </li>
                <li>
                    <Link to='/blog' className='text1'> Blog </Link>
                </li>
                <li>
                    <Link to='/pages' className='text1'> Pages </Link>
                </li>
                <li>
                    <Link to='/dashboard' className='text1'> Dashboard </Link>
                </li>
                <li>
                    <Link to='/contact' className='text1'> Contact </Link>
                </li>
                <button className=' btn btn-primary'> Become An Expert </button>
                <button> Sign In</button>
            </ul>

        </div>
    )
}

export default Main