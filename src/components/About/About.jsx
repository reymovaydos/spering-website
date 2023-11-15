import { Button } from '@mantine/core'
import AboutImg from '../../assets/images/experience-img.jpg'
import './About.scss'
export const About = () => {
    return (
        <div className='About'>
            <div className="image hover-zoom">
                <img src={AboutImg} alt="" />
            </div>
            <div className="About-right">
                <div className="About-content">
                    <h2>BEST EXPERINCED FREELANCER HERE</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                </div>
                <div className="btns">
                    <Button className='btn-read-more'>Read More</Button>
                    <Button className='btn-hire'>Hire</Button>
                </div>
            </div>
        </div>
    )
}