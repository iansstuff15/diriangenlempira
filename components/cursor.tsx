import { useEffect, useRef, useState } from "react"
import { gsap, Power4 } from "gsap"
import { cursorState } from "../states/cursor_state"
import { useSnapshot } from "valtio"

const Cursor=()=>{
let containerRef: HTMLDivElement | null
const snapshot = useSnapshot(cursorState)
const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
})

const mouseMove = (e:MouseEvent) =>{
    cursorState.locationX = e.clientX-16
    cursorState.locationY = e.clientY-16
    setMousePosition({
        x:e.clientX,
        y:e.clientY
    })
    
    
    gsap.to(containerRef,.3,{
        x:mousePosition.x -16,
        y:mousePosition.y -16,
        backgroundColor:snapshot.backgroundColor,
        color:snapshot.foregroundColor,
        height:snapshot.height,
        width:snapshot.width,
        pointerEvents:"none",
        visibility: snapshot.visible? "visible":"hidden",
        scale:snapshot.scale
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

    padding:15,
    position:'fixed',
    zIndex:3,
   
    borderRadius:100,
    mixBlendMode:snapshot.showDifference? 'difference': 'normal',
 
    }}>
{
    snapshot.text
}
</div>
}

export default Cursor