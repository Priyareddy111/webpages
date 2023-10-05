import React from 'react'
import Destinations from './Destinations'
const destinations = [
    {
        // title:'Popular Destinations',        
        // para:'These popular destinations have a lot to offer',
        id: 1,
        img: 'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        city: 'New York'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600',
        city: 'London'
    },
    {
        id: 3,
        img: 'https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg',
        city: 'Barcelona'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        city: 'Sydney'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        city: 'Rome'
    },
]
const demo = [
    {
        id: 1,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75',
        title: 'The Montcalm At Brewery London City',
        city: 'Westminster Borough, London',
        rating: 'Exceptional 3014 reviews',
        price: 'Starting from US$72'
    },
    {
        id: 2,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75',
        title: 'Staycity Aparthotels Deptford  Bridge Station',
        city: 'Ciutat Villa, Barcelona',
        rating: 'Exceptional  2345 reviews ',
        price: 'Starting from US$85'
    },
    {
        id: 3,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F3.png&w=384&q=75',
        title: 'The Westin New York at Times Square West',
        city: 'Manhattan, New York',
        rating: 'Exceptional 3014 reviews',
        price: 'Starting from US$68'
    },
    {
        id: 4,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F4.png&w=384&q=75',
        title: 'DoubleTree By Hilton Hotel New York Times Square West',
        city: 'Vaticano Prati,Rome',
        rating: 'Exceptional 5633 reviews',
        price: 'Starting from US$89'
    },
]
const advice = [
    {
        id: 1,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fblog%2F1.png&w=640&q=75',
        title: ' 10 European ski destinations you should visit this winter',
        date: 'Jan 06,2023'
    },
    {
        id: 2,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fblog%2F2.png&w=640&q=75',
        title: 'Booking travel during corona:good advice in an uncertain time',
        date: 'April 06,2022'
    },
    {
        id: 3,
        img: 'https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fblog%2F3.png&w=640&q=75',
        title: 'Where can I go? 5 amazing countries that open right now',
        date: 'Jan 06,2023'
    },
]
const asia = [
    {
        id:1,
        city:'Hawai',
        property:'12,683 properties'
    },
    {
        id:2,
        city:'Santorini',
    }
]



function Home() {
    return (
        <div className='container-fluid'>
            <img className='img' src='https://gotrip-next.vercel.app/img/masthead/1/bg.webp' alt='img' />
            <h1 className='home2'> Find Next Place To Visit </h1>
            <h2 className='home3'> Discover amazing places at exclusive deals </h2>
            <div>
                <h1 className='home4'>Popular Destinations</h1>
                <p className='home5'>These popular destinations have a lot to offer</p>
                <div className='map1 d-flex justify-content-between'>
                    {destinations.map((each) => {
                        return (
                            <div className='col-xl-2 imges'>
                                <img className='w-100 imges-img' src={each.img} alt='img' />
                                <h1>{each.city}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='d-flex'>
                <div className='col-xl-6 things-container'>
                    <img className='w-100 things-img' src='https://www.lajolyvie.com/wp-content/uploads/2018/08/travel-6.jpg' alt='img' />
                    <div className='things-text'>
                        <h1 className='enjoy'> Things To Do On <br /> Your Trip </h1>
                        <button className='button'> Learn More </button>
                    </div>
                </div>
                <div className='col-xl-6 things-container' >
                    <img className='w-100 things-img' src='https://www.redtaxi.co.in/blog/assets/images/pre-trip-car-checklist-for-safe-summer-vacation.webp' alt='img' />
                    <div className='things-text'>
                        <h4 className='enjoy'>Enjoy Summer Deals</h4>
                        <h1 className='enjoy'> Up to 70% Discount! </h1>
                        <button className='button'> Learn More </button>
                    </div>
                </div>
            </div>
            <div className='fames'>
                <h1> Recommended </h1>
                <p> Interdum et malesuada fames ac ante ipsum </p>
                <div className='product d-flex justify-content-between'>
                    {demo.map((eachProduct) => {
                        return (
                            <li className='images col-xl-3  p-3'>
                                <img className='w-100' src={eachProduct.img} alt='img' />
                                <h4>{eachProduct.title}</h4>
                                <h6>{eachProduct.city}</h6>
                                <h6>{eachProduct.rating}</h6>
                                <h5>{eachProduct.price}</h5>
                            </li>

                        )
                    }
                    )}
                </div>
            </div>
                    <div className='price'>
                <div className='price1'>
                    <img className='price3' src='https://gotrip-next.vercel.app/img/featureIcons/1/1.svg' alt='img' />
                    <h5>Best Price Guarantee</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
                <div>
                    <img className='price4' src='https://gotrip-next.vercel.app/img/featureIcons/1/2.svg' alt='img' />
                    <h5>Easy & Quick Booking</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
                <div className='price2'>
                    <img className='price5' src='https://gotrip-next.vercel.app/img/featureIcons/1/3.svg' alt='img' />
                    <h5>Customer Care 24/7</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
            </div>
            <div className='get'>
                <h2>Get inspiration for your next trip</h2>
                <p className='get1'>Interdum et malesuada fames</p>
            </div>
            <div className='product d-flex justify-content-center'>

                {advice.map((eachProduct) => {
                    return (
                        <div className='images1 col-xl-3'>
                            <img className='w-100' src={eachProduct.img} alt='img'/>
                            <h5>{eachProduct.title}</h5>
                            <h6>{eachProduct.date}</h6>
                        </div>
                    )
                })}
            </div>
            <div className='dest'>
                <h2>Destinations we love</h2>
                <p>Interdum et malesuada fames ac ante ipsum</p>
            </div>
            <div className='all'>
                <h6>All</h6>
                <h6>Europe</h6>
                <h6>Asia</h6>
                <h6>North America</h6>
            </div>
    
        </div>
    )
}

export default Home