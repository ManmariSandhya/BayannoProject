import './home.component.css';
import doctors from "../../assets/images/doctors.png"
import { Calendar, Facebook, Google, Linkedin, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import bg_img1 from '../../assets/images/bg_img1.jpg';
import bg_img2 from '../../assets/images/bg_img2.jpg';
import bg_img3 from '../../assets/images/bg_img3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { MainheaderComponent } from '../../mainheader/mainheader.component';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';
import { Link } from 'react-router-dom';
export function HomeComponent() {
    return (
        <div >
            <MainheaderComponent></MainheaderComponent>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bg_img1} className="d-block  image  " alt="..." />
                        <div className='absolute-div'>
                            <div className="carousel-caption ">
                                <h3>Giving Children The Care Deserve </h3>
                            </div>
                            <div className='carousel-caption-paragraph'>
                                <p >To keep the body in good health is a duty. Otherwise we shall not be able to keep our mind strong and clear</p>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={bg_img2} className="d-block image" alt="..." />
                        <div className='absolute-div'>
                            <div className="carousel-caption ">
                                <h3>Where Compassion and Healing Come Together</h3>
                            </div>
                            <div className='carousel-caption-paragraph'>
                                <p >Dedicated to providing multidisciplinary medical care and backed by state-of-the-art facilities</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bg_img3} className="d-block image" alt="..." />
                        <div className='absolute-div'>
                            <div className="carousel-caption ">
                                <h3>The skill to heal, the spirit to care</h3>
                            </div>
                            <div className='carousel-caption-paragraph'>
                                <p >Dedicated to providing multidisciplinary medical care and backed by state-of-the-art facilities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className="home-top-widgets ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-1">
                            <div className="home-widget widget-1">
                                <TelephoneFill className='bootstrap'></TelephoneFill>
                                <h4>Emergency Contact</h4>
                                <h3>1-800-400-7400</h3>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home-widget widget-2">
                                <Calendar></Calendar>
                                <h4>Doctor Appointment</h4>
                                <a href="/appointments" className="btn">
                                    Book An Appointment                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home-widget widget-3">
                                <i className="fa fa-clock-o"></i>
                                <h4>Opening Hours</h4>
                                <ul>
                                    <li className="clearfix">Monday - Friday
                                        <span className="float-right">10.00-21.00</span></li>
                                    <li className="clearfix">Saturday
                                        <span className="float-right">10.00-18.00</span></li>
                                    <li className="clearfix">Sunday
                                        <span className="float-right">11.00-17.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice sct-color-2 pb-0">
                <div className="container">
                    <div className="row align-items-md-center">

                        <div className="col col-md-6 col-sm-12 col-12">
                            <img src={doctors} className="img-fluid img-center"></img>
                        </div>

                        <div className="col col-md-6 col-sm-12 col-12">
                            <div className="px-3 py-3 text-center text-lg-left">
                                <h3 className="heading heading-3 strong-500">
                                    Welcome To Bayanno Diagnostic Center  </h3>
                                <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo.                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="slice slice--arrow bg-base-1 " style={{ height: '300px' }}>
                <div className="sct-inner container">
                    <div className="section-title section-title-inverse section-title--style-1 text-center pt-5">
                        <h3 className="section-title-inner text-white" >
                            <span>Our World class Services</span>
                        </h3>
                        <span className="section-title-delimiter clearfix d-none"></span>
                    </div>

                    <div className="fluid-paragraph fluid-paragraph-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.        </div>
                </div>
            </section>

            <div className='row para'>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h3>High quality service</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h3>Modern hospital and technology</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row para'>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h3>Ready for intervention</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </p>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h3> Specialist consulting for health problems</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='col-1'></div>
            </div>
            <section className="slice sct-color-1 relative b-xs-bottom department-section">
                <div className="container">
                    <div className="section-title section-title--style-1 text-center mb-4">
                        <h3 className="section-title-inner text-normal">
                            <span>Departments</span>
                        </h3>
                        <span className="section-title-delimiter clearfix d-none"></span>
                    </div>

                    <span className="clearfix"></span>

                    <span className="space-xs-xl"></span>

                    <div className="row-wrapper">
                        <div className="row">
                            <div className="col-4">
                                <a >
                                    <div className="department-small-view">
                                        <div className="block-icon text-center">
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/department_images/1.png" alt="" width="60"></img>
                                            <h5>Anesthetics</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a >
                                    <div className="department-small-view">
                                        <div className="block-icon text-center">
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/department_images/2.png" alt="" width="60"></img>
                                            <h5>Cardiology</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4">
                                <a >
                                    <div className="department-small-view">
                                        <div className="block-icon text-center">
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/department_images/3.png" alt="" width="60"></img>
                                            <h5 className='pt-4'>Gastroenterology</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="slice sct-color-1 relative">
                <div className="container">
                    <div className="section-title section-title--style-1 text-center mb-4">
                        <h3 className="section-title-inner text-normal">
                            <span>Our Awesome Doctors</span>
                        </h3>
                        <span className="section-title-delimiter clearfix d-none"></span>
                    </div>

                    <span className="clearfix"></span>

                    <span className="space-xs-xl"></span>

                    <div className="row-wrapper">
                        <div className="row department-doctor-list">
                            <div className="col-3 ">
                                <div className="block block--style-4 list doctor-list">
                                    <div className="block-image">
                                        <div className="view view-fifth">
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                            <div className="mask">
                                                <div className="view-buttons">
                                                    <span className="view-buttons-inner text-center appointment-btn">
                                                        <a href="" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1">
                                                            View Details                                            </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content w-100">
                                        <div className="block-body py-2 px-0">
                                            <small>
                                                Cardiology                                </small>
                                            <h3 className="heading heading-5 strong-500">
                                                <a href="" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1" style={{ color: 'black', textDecoration: 'none' }}>
                                                    Micheal Pewd                                    </a>
                                            </h3>

                                        </div>

                                        <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                            <div className="row">
                                                <div className="col-12">
                                                    <span>
                                                        <Facebook></Facebook>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Twitter></Twitter>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Google></Google>
                                                    </span>&nbsp;
                                                    <span>
                                                        <Linkedin></Linkedin>
                                                    </span>&nbsp;&nbsp;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="block block--style-4 list doctor-list">
                                    <div className="block-image">
                                        <div className="view view-fifth">
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                            <div className="mask">
                                                <div className="view-buttons">
                                                    <span className="view-buttons-inner text-center appointment-btn">
                                                        <a href="" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                            View Details                                            </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content w-100">
                                        <div className="block-body py-2 px-0">
                                            <small>
                                                Anesthetics                                </small>
                                            <h3 className="heading heading-5 strong-500">
                                                <a href="" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2" style={{ color: 'black', textDecoration: 'none' }}>
                                                    Erich Mcbride                                    </a>
                                            </h3>

                                        </div>

                                        <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                            <div className="row">
                                                <div className="col-12">
                                                    <span>
                                                        <Facebook></Facebook>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Twitter></Twitter>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Google></Google>
                                                    </span>&nbsp;
                                                    <span>
                                                        <Linkedin></Linkedin>
                                                    </span>&nbsp;&nbsp;

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice sct-color-2 b-xs-top b-xs-bottom">
                <div className="container">
                    <div className="text-center">
                        <div className="section-title section-title--style-1 text-center mb-4">
                            <h3 className="section-title-inner text-normal">
                                <span>Get In Touch With Our Professionals</span>
                            </h3>
                            <span className="section-title-delimiter clearfix d-none"></span>
                        </div>

                        <span className="clearfix"></span>
                     <Link to="/appointments">
                        <button style={{ backgroundColor: ' #177196', color: 'white', padding: '10px', borderColor: ' #177196' }}>Make a Appointment</button>
                        </Link>
                    </div>
                </div>
            </section>
            <MainFooterComponent></MainFooterComponent>
        </div>
    )
}
