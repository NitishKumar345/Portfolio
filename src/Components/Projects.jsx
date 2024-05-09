import React from 'react'
import "../Components/Projects.css"

import portfolioimg from '../../public/portfolioimg.png'
import Bookstore from '../../public/Bookstore.jpg'
import fruitslicerimg from '../../public/fruitslicerimg.jpg'
import weather from '../../public/weather.jpg'

export default function Projects() {
  return(
    <>
    <div 
    name="Projects" 

    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-10"> 
    <div >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="projectsBox ">
                <div className="box1">
                    <div className="headingportfolio">
                    <img src={portfolioimg} alt=""  className="portfolioimg"/>
                        <h4>Portfolio</h4>
                    </div>
                </div>
                <div className="box1">
                    <div className="Bookstore">
                    <img src={Bookstore} alt="" className="Bookimg"/>
                        <h4 className='Books'>BookStore website</h4>
                    </div>
                </div>
                <div className="box1">
                    <div className="Fruits">
                    <img src={fruitslicerimg} alt="" className="Fruitsimg"/>
                        <h4 className='Fruith4'>Fruit Slicer Game</h4>
                    </div>
                </div>
                <div className="box1">
                    <div className="weather">
                    <img src={weather} alt="" className="weatherimg"/>
                        <h4  className='weatherh4' >Weather Report</h4>
                    </div>
                </div>
            </div>

     </div>       
     </div>
    </>
     
  )

}
