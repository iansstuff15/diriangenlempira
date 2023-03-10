import { ReactNode } from "react"
import styles from '../styles/components/button.module.scss'
interface buttonProps{
    children:ReactNode,
    backgroundColor?:string,
    foregroundColor?:string,
}
const Button:React.FC<buttonProps> =({children,backgroundColor,foregroundColor})=>{

    return(
        <button 
        
        className={styles.container}
        style={{
            backgroundColor:backgroundColor? backgroundColor: "#4d4b4b",
            color:foregroundColor? foregroundColor: "white",
        }}
        >{children}</button>
    )
}

export default Button