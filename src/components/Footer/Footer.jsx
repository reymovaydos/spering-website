import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.scss';
export const Footer = () => {
    return (
        <footer>
            <MDBFooter className='text-center' color='white' style={{ backgroundColor: "#1a2e35" }}>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>

                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start>
                                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>
                    <section className=''>
                        <MDBRow style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Useful link</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='/' className='text-white'>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/about' className='text-white'>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/work' className='text-white'>
                                            Work
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/category' className='text-white'>
                                            Category
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Offices</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                    Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Information</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                    Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: '#1a2e35' }}>
                    <a className='text-white' href='https://html.design/'>
                        © 2023 All Rights Reserved By Free Html Templates
                    </a>
                </div>
            </MDBFooter>
        </footer>
    )
}