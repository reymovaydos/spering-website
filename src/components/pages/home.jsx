import { Banner } from "../Banner/banner";
import { About } from "../About/About";
import { Category } from "../Category/Category";
import { Company } from "../Company/Company";
import { Testimonial } from "../Testimonial/Testimonial";
import { Footer } from "../Footer/Footer";
import { Work } from "../Work/Work";

export const HomePage = () => {
    return (
        <div className="home">
            <Banner/>
            <About/>
            <Category/>
            <Company/>
            <Work/>
            <Testimonial/>
            <Footer/>
        </div>    
    )
}