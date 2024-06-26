import styled from "styled-components";
import Puntos from "../imagenes/Puntos";
// import {reactComponent as Puntos} from '../imagenes/puntos.js'


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;


const Fondo = () => {
  return (
    <>
      <PuntosArriba/>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      >
        <path 
          fill="#0099ff"
          fillOpacity="1" d="M0,256L24,240C48,224,96,192,144,170.7C192,149,240,139,288,144C336,149,384,171,432,149.3C480,128,528,64,576,37.3C624,11,672,21,720,48C768,75,816,117,864,154.7C912,192,960,224,1008,229.3C1056,235,1104,213,1152,192C1200,171,1248,149,1296,128C1344,107,1392,85,1416,74.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
        </path>
      </Svg>
      <PuntosAbajo/>
    </>
  )
}

export default Fondo