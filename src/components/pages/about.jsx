import { About } from "../About/About"
import { Company } from "../Company/Company"
import { Footer } from '../Footer/Footer'
export const AboutPage = () => {
    return (
        <div className="about">
           <About/>
           <Company/>
           <Footer/>
        </div>    
    )
}