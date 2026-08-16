const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(0);
  let [timer, setTimer] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const otpBtn = useRef("generate-otp-button");
  
  //countdown is a side effect in this case
  useEffect(()=>{
    if(!isCounting) return;
    const intervalId = setInterval(()=>{
       setTimer(prevTimer => {
      if (prevTimer > 1) {
        return prevTimer - 1;
      }

      setIsCounting(false);
      return 0;
    });          
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isCounting])
  
  

  const handleGenerateOtp = ()=>{
    //generates 6 digit otp
    const num = Math.floor(Math.random() * 900000) + 100000;  
    setOtp(num);
    setTimer(5)
setIsCounting(true) 
     
  }


  return (
    <div className="container">
    <h1 id="otp-title">OTP Generator</h1>
    <h2 id="otp-display"> {otp > 0 ? otp : "Click 'Generate OTP' to get a code"}</h2>    
    <p id='otp-timer' aria-live='assertive'>
        {isCounting
          ? `Expires in: ${timer} seconds`
          : otp>0 && 
            "OTP expired. Click the button to generate a new OTP."}
      </p>
    <button id="generate-otp-button" onClick={handleGenerateOtp} disabled={isCounting}>Generate OTP</button>
    </div>
  )
};