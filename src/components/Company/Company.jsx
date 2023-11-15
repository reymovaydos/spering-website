import { Button } from '@mantine/core';
import './Company.scss';
import CompanyImg from '../../assets/images/about-img.jpg'
export const Company = () => {
    return(
        <div className='Company'>
            <img src={CompanyImg} alt="" />
            <div className="Company-bottom">
                <h2>ABOUT SPERING COMPANY</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you</p>
                <Button className='btn-read-more'>Read More</Button>
            </div>
        </div>   
    )
}