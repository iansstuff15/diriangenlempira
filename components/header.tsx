import Link from "next/link"
import styles from '../styles/components/header.module.scss'
import Image from "next/image"
const Header = () =>{

return(
    <header className={styles.container}>
        <div>
        <Image alt="diriangen powell website logo" src={'/logo.svg'} width={50} height={50}/>
        </div>
        <ul>
        <Link href="/">
            <li>
            Home
            </li>
          
        </Link>
        <Link href="/">
            <li>Work</li>
        </Link>
        <Link href="/">
            <li>About me</li>
        </Link>
        
        </ul>
        <div className={styles.cta_container}>
        <Link href="/">
            <button>Contact</button>
        </Link>
        </div>
      
    </header>
)
}

export default Header

