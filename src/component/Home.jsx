import React from 'react'
import Destinations from './Destinations'
const destinations =[
    {
        // title:'Popular Destinations',        
        // para:'These popular destinations have a lot to offer',
        id:1,
        img:'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        city:'New York'
    },
    {
      id:2,  
      img:'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600',
      city:'London'
    },
    {
        id:3,
        img:'https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg',
        city:'Barcelona'
    },
    {
        id:4,
        img:'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        city:'Sydney'
    },
    {
        id:5,
        img:'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        city:'Rome'
    },
]




function Home() {
  return (
    <div className='home1'>
        <img className='img' src='https://gotrip-next.vercel.app/img/masthead/1/bg.webp' alt='img'/>
      <h1 className='home2'> Find Next Place To Visit </h1>
      <h2 className='home3'> Discover amazing places at exclusive deals </h2>
    <div>
    <h1 className='home4'>Popular Destinations</h1>        
     <p className='home5'>These popular destinations have a lot to offer</p>
     <div className='map1'>
        {destinations.map((each) =>{
            return(
                <div>
                    <img src={each.img} alt='img'/>
                    <h1>{ each.city}</h1>
                
                </div>
            )
        })}
     </div>
    </div>
    </div>
  )
}

export default Home