import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Testimonial.scss';
export const Testimonial = () => {
    return (
        <>
            <div className="testimonial">
                <h1>Testimonial</h1>
                <MDBContainer className="my-5">
                    <MDBCarousel showControls dark>
                        <MDBCarouselItem className="active text-center">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8" className="col">
                                    <h5 className="mb-3">John Hissona</h5>
                                    <p className="text-muted">
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                    </p>
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                </MDBCol>
                            </MDBRow>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8" className="col">
                                    <h5 className="mb-3">John Hissona</h5>
                                    <p className="text-muted">
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                    </p>
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                </MDBCol>
                            </MDBRow>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8" className="col">
                                    <h5 className="mb-3">John Hissona</h5>
                                    <p className="text-muted">
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                    </p>
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                </MDBCol>
                            </MDBRow>
                        </MDBCarouselItem>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        </>
    )
}