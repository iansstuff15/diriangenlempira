import Image from "next/image"
import { useSnapshot } from 'valtio';
import { cursorState } from '../states/cursor_state';
import { gsap } from "gsap";
import { useEffect } from 'react';
interface imageProps{
    alt:string,
    src:string,
    width:number,
    height:number,
    className?:string,

}
const AnimatedImage: React.FC<imageProps> = ({alt,src,width,height,className}) =>{
    const snapshot = useSnapshot(cursorState)
    let image: HTMLImageElement | null
    useEffect(()=>{
        
        document.addEventListener("scroll",()=>{
            gsap.to(image,0,{
                y: document.body.scrollTop
            })
        })
        console.log(document.body.scrollTop)
    },[])
    return(
        <div
        className={className}
        style={{
            overflow:"hidden",
            width:width,
            height:height
        }}>
            <Image alt={alt} ref={(el)=>image=el}  src={src} width={width} height={height} onMouseEnter={
                ()=>{
                    cursorState.scale = 0
                    gsap.to(image,0.3,{
                       scale:1.02,
                       
                    })
                }

            } 
            onMouseLeave={
                ()=>{
                    cursorState.scale = 1
                    gsap.to(image,0.3,{
                        scale:1
                    })
                }
            }
            />
        </div>
    )
}

export default AnimatedImage