import Button from "../components/button"
import Layout from "../components/layout"
import styles from '../styles/pages/contact.module.scss'
const Contact = () =>{

    return(
        <main>
            <Layout>
            <div className={styles.container}>
                <h1>{"Let\’s Work Together"}</h1>
                <Button backgroundColor="#455CE9">Contact me</Button>
            </div>
            </Layout>
           
        </main>
    )
}

export default Contact