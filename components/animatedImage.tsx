import Image from "next/image"
import { useSnapshot } from 'valtio';
import { cursorState } from '../states/cursor_state';
import { gsap } from "gsap";
interface imageProps{
    alt:string,
    src:string,
    width:number,
    height:number,
}
const AnimatedImage: React.FC<imageProps> = ({alt,src,width,height}) =>{
    const snapshot = useSnapshot(cursorState)
    let image: HTMLImageElement | null

    return(
        <div style={{
            overflow:"hidden",
            width:width,
            height:height
        }}>
            <Image alt={alt} ref={(el)=>image=el}  src={src} width={width} height={height} onMouseEnter={
                ()=>{
                    cursorState.scale = 0
                    gsap.to(image,0.3,{
                       scale:1.01,
                       
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