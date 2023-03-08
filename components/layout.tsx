import Header from "./header"
import Splash from "./splash"

interface layoutProps{
    children: React.ReactNode
}

const Layout:React.FC<layoutProps> = ({children}) =>{

    return(
        <div>
            <Splash/>
            <Header/>
                {
                    children
                }
        </div>
    )
}

export default Layout