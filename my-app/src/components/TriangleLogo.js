import triangle_0 from '../img/triangle-logo/Triangle_1.png'
import triangle_1 from '../img/triangle-logo/Triangle_2.png'
import triangle_2 from '../img/triangle-logo/Triangle_3.png'
import triangle_3 from '../img/triangle-logo/Triangle_4.png'
import triangle_4 from '../img/triangle-logo/Triangle_5.png'
import triangle_5 from '../img/triangle-logo/Triangle_6.png'
import triangle_6 from '../img/triangle-logo/Triangle_7.png'
import triangle_7 from '../img/triangle-logo/Triangle_8.png'
import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react';

function TriangleLogo({size}) {
    const [mousePos, setMousePos] = useState({});
    const triangleRef = useRef()

    useEffect(() => {
        const handleMouseMove = (event) => {
            const newX = event.clientX
            const newY = event.clientY

            setMousePos({ x: event.clientX, y: event.clientY })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    let xDir = 0
    let yDir = 0

    if (triangleRef.current !== undefined) {
        const boundingTriangle = triangleRef.current.getBoundingClientRect()
        const xCenter = boundingTriangle.x + boundingTriangle.width/2
        const yCenter = boundingTriangle.y + boundingTriangle.height/2

        xDir = -(mousePos.x - xCenter)/10
        yDir = -(mousePos.y - yCenter)/10
    }

    const triangles = [
        triangle_0,
        triangle_1,
        triangle_2,
        triangle_3,
        triangle_4,
        triangle_5,
        triangle_6,
        triangle_7,
    ]
    return (
        <Container ref={triangleRef} size={size}>
            {triangles.map((image, index) =>
                <MoveableTriangle image={image} moveMultiplyer={(1+index)/50} move={{x: xDir, y: yDir}} key={index}/>
            )}
        </Container>
    )
}

function MoveableTriangle({image, moveMultiplyer, move}) {
    return (
        <Image src={image} style={{
            top: (move.y*moveMultiplyer) + "%",
            left: (50 + (move.x*moveMultiplyer)) + "%"
        }}/>
    )
}

const Container = styled.div`
  position: relative;
  height: ${p => p.size}vh;
  width: 100vw;
`


const Image = styled.img`
  position: absolute;
  transform: translateX(-50%);
  max-width: 80%;
  max-height: 100%;
  
  @media only screen and (max-width: 768px) {
    /* For mobile: */
    transition: top 1000ms ease-in-out, left 1000ms ease-in-out;
  }
`


export default TriangleLogo