import './services.css'
import ServiceContainer from '../../assets/ServiceContainer.jsx'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
const Services=()=>{
    return(
           <div id="Services" className="Services">
            <div className="Services-title">
                <h1>My Services </h1>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="Services-container">
                {
                    ServiceContainer.map((service,index)=>{
                        return <div key={index} className="services-formate"> 
                        <h3>{service.S_no}</h3>
                        <h2>{service.S_name}</h2>
                        <p>{service.S_desc}</p>
                         <div className="services-readmore">
                            <p>Readmore</p>
                          {/* <FontAwesomeIcon icon={byPrefixAndName.fas['arrow-right']} /> */}
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg> */}
                     
                        </div>
                        </div>
                       

                    })
                }
               
            </div>

           </div>



    )
}
export default Services;