import Link from "next/link"
import { useSnapshot } from 'valtio';
import { cursorState } from '../states/cursor_state';
import { gsap } from "gsap";
interface navigateItemProps{
    label:string,
    to:string,
}
const NavigateItem:React.FC<navigateItemProps> = ({label,to}) =>{
let element: HTMLLIElement | null;
function getAbsPosition(element:HTMLLIElement | null) {
    var rect = element!.getBoundingClientRect();
    return {x:rect.left,y:rect.top}
 }

const snapshot = useSnapshot(cursorState)
return(

<Link href={to}>
    <li  ref={(el)=>{
    element = el}}
onMouseEnter={()=>{
    let coords = getAbsPosition(element)
    cursorState.width = element!.clientWidth
    cursorState.showDifference = true
    
    gsap.to(element,0.3,{
        y: (coords.y * 0.01) - (snapshot.locationY * 0.01 ) ,
       
        x:   ((coords.x * 0.01) - ((snapshot.locationX * 0.01 )))*2
    })
}}
onMouseLeave={()=>{
    cursorState.width = 0
    cursorState.showDifference = false
    gsap.to(element,0.3,{
        y:0,
        x:0,    
     
    })
}}>{label}</li>
</Link>


)
}
export default NavigateItem