import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/splash.module.scss'
import { gsap,Power3 } from 'gsap'

const Splash = ()=>{
    const Greatings = ["Hello","Bonjour", "Hola","Привет","你好","สวัสดี","こんにちは","Kamusta"]
    const [greet,setGreet] = useState('')
    const [count,setCount] = useState(0)

    let containerRef = useRef(null)
    useEffect(()=>{

        setTimeout(()=>{
            if(count< Greatings.length){
                setCount(count+1)
                setGreet(Greatings[count])
            }
           else{
           gsap.to(containerRef,0.8,{
            y:"-110vh",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius:"100%",
            ease:Power3.easeInOut
           }
           
           )
           }
           console.log(containerRef)
         },200)
   
    
    },[Greatings.length, count])
    return(
        <div ref={el =>{containerRef=el}}  className={styles.container}>
                <h1>{greet}</h1>
        </div>
    )
}

export default Splash