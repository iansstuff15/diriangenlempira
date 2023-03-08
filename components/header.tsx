import Link from "next/link"
import styles from '../styles/components/header.module.scss'
import Image from "next/image"
import Button from "./button"
import NavigateItem from "./navigateItem"
const Header = () =>{

return(
    <header className={styles.container}>
        <div>
        <Image alt="diriangen powell website logo" src={'/logo.svg'} width={50} height={50}/>
        </div>
        <ul>
        <NavigateItem to="/" label="Home"  />
        <NavigateItem to="/" label="Work"  />
        <NavigateItem to="/" label="About me"  />
        </ul>
        <div className={styles.cta_container}>
        <Link href="/">
            <Button>Contact Me</Button>
        </Link>
        </div>
      
    </header>
)
}

export default Header

