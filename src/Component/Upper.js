import {useState} from 'react'
import './Upper.css'
import mainLogo from '../Image/dweep io 1.svg'

function Upper() {
    const [mail, setInfo] = useState()
   
    function isValidEmail() {
       
      }
    const Register=()=>{
        if(isValidEmail( mail)){
            setInfo()
        }else{
            alert("ENTER A VALID MAIL")
            setInfo()
        }
    }
  
  return (
    <div className="Conatiner">
            <div className="left-section">
                <p className="head">An inspiring design delivered to <br/>your inbox every morning </p>
                <p className="info">Our team scouts the internet for the best designs,<br/>illustrations and art and delivers
                a truly inspiring <br/>one every day to your inbox </p>  
                <p className="info2">Show me how it looks</p>
                <input type="email" placeholder="Your e-mail address" value={mail}/>
                <button onClick={Register}>Register Now</button>
                <div className="line">Free - No Spam - No Data Sharing</div>
            </div>

            <div className="right-section">
                <img src={mainLogo} alt="logo" /> 
            </div>
    </div>
  )
}

export default Upper
