import { Calendar, Calendar3, Facebook, Google, Linkedin, Person, Twitter } from 'react-bootstrap-icons';
import './doctors.component.css';
import { MainheaderComponent } from '../../mainheader/mainheader.component';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';
import { Link } from 'react-router-dom';
export function DoctorsComponent() {
    return (
        <div>
            <MainheaderComponent></MainheaderComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head doctor_bg_img" >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase c-white"  style={{ color: 'white' }}>
                                Doctors Of All Departments                </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white' }}>
                                            Home   </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        Doctors                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice--offset sct-color-1 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-3">
                            <div className="sidebar sidebar--style-2 doctor-sidebar">
                                <div className="sidebar-object">
                                    <div className="section-title section-title--style-1">
                                        <h3 className="section-title-inner heading-sm strong-500">
                                            Doctors Of                            </h3>
                                    </div>

                                    <ul className="categories categories--style-2 p-3">
                                        <li className="active p-3">
                                            <a href="/doctors" style={{color:'black',textDecoration:'none'}}>
                                                All Departments                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a href="/doctors" style={{color:'black',textDecoration:'none'}}>
                                                Anesthetics                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a href="/doctors" style={{color:'black',textDecoration:'none'}}>
                                                Cardiology                                </a>
                                        </li>
                                        <li className=" p-3">
                                            <a href="/doctors" style={{color:'black',textDecoration:'none'}}>
                                                Gastroenterology                                </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="block block-post">
                                <div className="block department-doctor-list">
                                    <div className="doctor-grid-view row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="block block--style-4 list doctor-list">
                                                <div className="block-image">
                                                    <div className="view view-fifth">
                                                        <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                                            <div className="mask">
                                                                <div className="view-buttons">
                                                                    <span className="view-buttons-inner text-center appointment-btn">
                                                                        <a href="" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1">
                                                                            <Person></Person> &nbsp;Profile                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="block-content w-100">
                                                    <div className="block-body py-2 px-0">
                                                        <h3 className="heading heading-5 strong-500">
                                                            <a href="" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2" style={{color:'black',textDecoration:'none'}}>
                                                                Erich Mcbride                                                </a>
                                                        </h3>

                                                    </div>

                                                    <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                                        <div className="row social-media">
                                                            <div className="col-8">
                                                            <span>
                                                <Facebook></Facebook>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Twitter></Twitter>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Google></Google>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Linkedin></Linkedin>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="block block--style-4 list doctor-list">
                                                <div className="block-image">
                                                    <div className="view view-fifth">
                                                        <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg"></img>
                                                        <div className="mask">
                                                            <div className="view-buttons">
                                                                <span className="view-buttons-inner text-center appointment-btn">
                                                                    <a href="" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1" className="btn btn-styled btn-base-1 btn-outline btn-icon-left btn-st-trigger" data-effect="st-effect-1">
                                                                        <Person></Person> &nbsp;Profile                                                        </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block-content w-100">
                                                    <div className="block-body py-2 px-0">
                                                        <h3 className="heading heading-5 strong-500">
                                                            <a href="" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1" style={{color:'black',textDecoration:'none'}}>
                                                                Micheal Pewd                                                </a>
                                                        </h3>

                                                    </div>

                                                    <div className="block-footer block-footer-fixed-bottom b-xs-top">
                                                        <div className="row social-media">
                                                            <div className="col-8">
                                                            <span>
                                                <Facebook></Facebook>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Twitter></Twitter>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Google></Google>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                    <Linkedin></Linkedin>
                                                    </span>&nbsp;&nbsp;&nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="doctor-pagination d-flex justify-content-center mb-4 pt-4">
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className='row ml-0' style={{backgroundColor:'rgb(0, 135, 190)',width:'100%',height:'150px'}}>
                <div className='col-3' style={{color:'white',textAlign:'center',paddingTop:'50px'}}>
                    <h3 style={{marginLeft:'35px'}} >Get Touch With Specialist</h3>
                </div>
                <div className='col-6'></div>
                <div className='col-3' style={{padding:'50px',}}>
                    <Link to="/appointments">
                    <button style={{background:'white',padding:'10px',color:'rgb(0, 135, 190)'}}><Calendar3></Calendar3> &nbsp; BOOK AN APPOINMENT</button>
                    </Link>
                </div>
            </div>
        <MainFooterComponent></MainFooterComponent>
        </div>
    )
}