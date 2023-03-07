import { useEffect, useRef, useState } from "react"
import { gsap, Power4 } from "gsap"
const Cursor =()=>{
let containerRef: HTMLDivElement | null
const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
})
const mouseMove = (e:MouseEvent) =>{

    setMousePosition({
        x:e.clientX,
        y:e.clientY
    })
    
  
    gsap.to(containerRef,.3,{
        x:mousePosition.x,
        y:mousePosition.y,
       
    })
    }
    const mouseEnter = (e:MouseEvent) =>{
    
       
        gsap.to(containerRef,.3,{
            width:1.4,
            height:1.4,
           
        })
        }
useEffect(()=>{

window.addEventListener("mousemove",mouseMove)

console.log(containerRef)

// return ()=>{
//     window.removeEventListener("mousemove",mouseMove)
// }
},)

return<div ref={el =>{containerRef=el}}  style={{
    width:20,
    height:20,
    position:'fixed',
    zIndex:3,
    backgroundColor:"black",
    borderRadius:100,
  
    margin:"1rem"
    }}>

</div>
}

export default Cursor