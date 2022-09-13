import { useRef, useState } from "react";
import "./style.css";

export const FrontCard = () => {

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
    <div className="container-front-card" style={{position:'absolute', top:'54vh', left: '15%'}}>
      <div className="wrapper" 
        ref={wrapper} 
        onMouseMove={wrapperMove}
        onMouseLeave={wrapperLeave}>
        <div className="ticket" ref={ticket} style={transformTicket}>
          <div className="bg"></div>
          <div className="padding">
            <div className="band-black"></div>
          </div>
          <div className="flex" style={{justifyContent:'center'}}>
            <input
              className="input-card"
              placeholder="000"
              readOnly
            />
          </div>
          <p style={{marginTop:'30px'}}>Card 3D Kooddi Form Card React</p>
          <p style={{paddingBottom:'50px'}}>David Morales - 2022</p>
        </div>
      </div>
    </div>
  );
};
