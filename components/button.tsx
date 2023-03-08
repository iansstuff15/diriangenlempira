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
            backgroundColor:backgroundColor? backgroundColor: "#1f1f1f",
            color:foregroundColor? foregroundColor: "white",
        }}
        >{children}</button>
    )
}

export default Button