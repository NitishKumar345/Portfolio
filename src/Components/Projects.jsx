import React from 'react'
import "../Components/Projects.css"

import portfolioimg from '../../public/portfolioimg.png'
import WordtoPDF from '../../public/WordtoPDF.png'
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
                        <h4 className='portfolioh4'>Portfolio</h4>
                          <a href="https://jade-alfajores-68b0cf.netlify.app/" target='_blank' className='livelink'>Live</a>
                    </div>
                </div>
                <div className="box1">
                    <div className="Bookstore">
                    <img src={WordtoPDF} alt="" className="Bookimg"/>
                        <h4 className='Books'>Converter App</h4>
                        <a href="https://jade-alfajores-68b0cf.netlify.app/" target='_blank' className='livelink'>Live</a>
                    </div>
                </div>
                <div className="box1">
                    <div className="Fruits">
                    <img src={fruitslicerimg} alt="" className="Fruitsimg"/>
                        <h4 className='Fruith4'>Fruit Slicer Game</h4>
                        <a href="https://splendid-crisp-8e6cf1.netlify.app" target='_blank' className='livelink'>Live</a>
                    </div>
                     
                </div>
                <div className="box1">
                    <div className="weather">
                    <img src={weather} alt="" className="weatherimg"/>
                        <h4  className='weatherh4' >Weather Widget</h4>
                        <a href="https://thunderous-otter-bc7299.netlify.app" target='_blank' className='livelink'>Live</a>
                    </div>
                </div>
            </div>

     </div>       
     </div>
    </>
     
  )

}
