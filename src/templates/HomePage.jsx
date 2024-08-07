import React from 'react'
import Banner from "../components/Banner";
import CardBox from "../components/CardBox";

function HomePage(props){
  const images = [
    {
        id:1,
        src: "../Hero image 1.png"
    },
    {
        id:2,
        src: "../hero image 2.png"
    }
  ];
    return(
    <div style={{"backgroundColor":"#FFF9F0"}}>
        <Banner images={images} />
        <div className="px-10" style={{"backgroundColor":"#FFF9F0"}}>
          <h3 style={{"color":"#1F3923"}} className="text-lg font-medium mx-6 my-6">Featured Products</h3>
          <CardBox />
          <p className='text-center'>Previous &nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp; Next </p>
        </div>
    </div>
    )
}

export default HomePage