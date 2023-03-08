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
const snapshot = useSnapshot(cursorState)
return(

<Link href={to}>
    <li  ref={(el)=>{
    element = el}}
onMouseEnter={()=>{
    cursorState.width = element!.clientWidth
    cursorState.showDifference = true
    gsap.to(element,0.3,{
        // y:snapshot.locationY * 0.1 ,
        x: (element!.getBoundingClientRect().width * 0.01) - (snapshot.locationX * 0.01 ) + 15
    })
}}
onMouseLeave={()=>{
    cursorState.width = 0
    cursorState.showDifference = false
    gsap.to(element,0.3,{
        y:0,
        x:0
    })
}}>{label}</li>
</Link>


)
}
export default NavigateItem