import './MyWork.css';
import Mywork_data from '../../assets/MyWorkData.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


 const MyWork=()=>{
    return(
        <div id="Portfolio" className='mywork'>
            <div className="mywork-title">
                <h1>My latest Work </h1>
                <img src="" alt="" />
            </div>
            <div className="mywork-container">
                {
                   Mywork_data.map((work,index)=>{
                        return <img key={index} src={work.w_img} alt="image abhar koni dhab"/>
                    })
                }
            </div>
            <div className="mywork-showmore">
                <p>Show More </p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>


        </div>
    )
 }
 export default MyWork;