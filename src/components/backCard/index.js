import { useRef, useState } from "react";
import logo from '../../public/logo.png'
import "../frontCard/style.css";

export const BackCard = () => {

  const wrapper = useRef();
  const ticket = useRef();
  const [transformTicket, setTransformTicket] = useState({})
  const { innerWidth, innerHeight } = window;

  const halfWidth = innerWidth / 2;
  const halfHeight = innerHeight / 2;

  const transform = (rotationX, rotationY) => ({
    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  })

  const wrapperMove = (event) => {
    const { clientX, clientY } = event;
    const rotationX = ((clientX - halfWidth) / halfWidth) * 15;
    const rotationY = ((clientY - halfHeight) / halfHeight) * 15;
    
    if(!ticket.current.contains(event.target)){
        transform(0,0)
    }else{
        setTransformTicket(transform(rotationX, rotationY))
    }
    
  };

  const wrapperLeave = () => {
    setTransformTicket(transform(0, 0))
  };

  return (
    <div className="container-front-card" style={{position:'absolute', top:'6vh', left: '10%'}}>
      <div className="wrapper" 
        ref={wrapper} 
        onMouseMove={wrapperMove}
        onMouseLeave={wrapperLeave}>
        <div className="ticket" ref={ticket} style={transformTicket}>
          <div className="bg"></div>
          <div className="flex align">
            <img src={logo} alt="" />
            <h1>Koddi Card</h1>
          </div>
          <h2>4000 1234 5678 9010</h2>
          <div className="flex container-date">
            <h6>01/19</h6>
            <h6>Credit</h6>
          </div>
          <div className="flex container-name">
            <h3>David Morales</h3>
            <h4>VISA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};