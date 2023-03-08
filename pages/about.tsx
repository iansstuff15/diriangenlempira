import Image from "next/image"
import Button from "../components/button"
import Layout from "../components/layout"
import styles from '../styles/pages/about.module.scss'
import AnimatedImage from "../components/animatedImage"
const Contact = () =>{

    return(
        <main>
            <Layout>
            <div className={styles.container}>
              
                
                <AnimatedImage  alt="Image of Diriangen Lempira Powell" src={'/profile.jpg'} width={400} height={400}  />
                <h1>Powell, Diriangen Lempira</h1>
                <Button backgroundColor="#455CE9">Download CV</Button>
            </div>
            </Layout>
           
        </main>
    )
}

export default Contact