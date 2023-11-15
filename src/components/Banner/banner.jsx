import React from 'react';
import { Button } from '@mantine/core';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import BannerImg from '../../assets/images/slider-img.png'
import './banner.scss';
export const Banner = () => {
    return (
        <>
            <MDBCarousel>
                <MDBCarouselItem itemId={1}>
                    <div className="banner">
                        <div className="banner-left">
                            <div className="banner-content">
                                <h1>YOU CAN HIRE FREELANCER HERE</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                            </div>
                            <div className="buttons">
                                <Button className='btn-about-us'>About Us</Button>
                                <Button className="btn-get-quote">Get A Quote</Button>
                            </div>
                        </div>
                        <div className='bg-image hover-zoom'>
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <div className="banner">
                        <div className="banner-left">
                            <div className="banner-content">
                                <h1>YOU CAN HIRE FREELANCER HERE</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                            </div>
                            <div className="buttons">
                                <Button className='btn-about-us'>About Us</Button>
                                <Button className="btn-get-quote">Get A Quote</Button>
                            </div>
                        </div>
                        <div className='bg-image hover-zoom'>
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <div className="banner">
                        <div className="banner-left">
                            <div className="banner-content">
                                <h1>YOU CAN HIRE FREELANCER HERE</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                            </div>
                            <div className="buttons">
                                <Button className='btn-about-us'>About Us</Button>
                                <Button className="btn-get-quote">Get A Quote</Button>
                            </div>
                        </div>
                        <div className='bg-image hover-zoom'>
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </MDBCarouselItem>
            </MDBCarousel>
        </>
    )
}