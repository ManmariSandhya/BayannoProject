
import { Calendar3, Facebook, Google, Linkedin, Person, Twitter } from 'react-bootstrap-icons';
import { MainheaderComponent } from '../../mainheader/mainheader.component';
import './gastroenterology_page.component.css';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';


export function GastroenterologyPageComponent() {
    return (
        <div>
            <MainheaderComponent></MainheaderComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head department_bg_img" >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase" style={{ color: "white" }}>
                                ANESTHETICS </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white',textDecoration:'none' }}>
                                            Home   </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        Anesthetics                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slice--offset sct-color-1 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-3" >
                            <div className="sidebar sidebar--style-2 doctor-sidebar" style={{ backgroundColor: "#22a0d4" }}>
                                <div className="sidebar-object">

                                    <ul className="categories categories--style-2 p-3">

                                        <li className=" p-3">
                                            <a  href='/department' style={{ color: "white" ,textDecoration:'none' }} >Anesthetics</a>
                                        </li> 
                                        <li className=" p-3">
                                            <a href='/cardiology' style={{ color: "white"  ,textDecoration:'none'}}>Cardiology</a>
                                        </li>
                                        <li className=" p-3">
                                            <a  href='/gastroenterology' style={{ color: "white"  ,textDecoration:'none'}}>Gastroenterology</a>
                                        </li>

                                    </ul>
                                    <div className="appointment-btn">
                                        <a href="/appointments" className="btn btn-styled btn-base-1 btn-outline btn-icon-left" style={{width:'250px'}}>
                                           <Calendar3></Calendar3>  Book Appointment                            </a>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div >
                                        <p style={{ textAlign: "center", color: "white" }}>For Emergency Contact</p>
                                        <h3 style={{ textAlign: "center", color: "white" }}>1-800-400-7400 </h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="block block-post">
                                <div className='parag'>
                                    <p>There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by injected humour,
                                        or randomised words which don't look even slightly believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                        predefined chunks as necessary, making this the first true generator on the Internet.
                                        It uses a dictionary of over 200 Latin words, combined with a handful of model
                                        sentence structures, to generate Lorem Ipsum which looks reasonable.
                                        The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                                        or non-characteristic words etc.</p>
                                </div>
                                <div className="department-price-list row mb-5">
                                    <div className="col-md-12">
                                        <h4 className='heading-4'>
                                        Gastroenterology Department Facilities</h4>
                                        <span className="short-delimiter--style-1 mb-4"></span>

                                        <div className="accordion" id="accordionPanelsStayOpenExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                        <h5 className="card-title ">
                                                            <a style={{ textDecoration: "none", color: "black" }} className="accordion-toggle" data-toggle="collapse" data-parent="#collapseFour" href="#collapseFour-10" aria-hidden="true" aria-expanded="false">
                                                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet                                            </a>
                                                        </h5>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="card-body">
                                                        <p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                        <h5 className="card-title ">
                                                            <a style={{ textDecoration: "none", color: "black" }} className="accordion-toggle" data-toggle="collapse" data-parent="#collapseFour" href="#collapseFour-10" aria-hidden="true" aria-expanded="false">
                                                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet                                            </a>
                                                        </h5>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div className="card-body">
                                                        <p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                        <h5 className="card-title ">
                                                            <a style={{ textDecoration: "none", color: "black" }} className="accordion-toggle" data-toggle="collapse" data-parent="#collapseFour" href="#collapseFour-10" aria-hidden="true" aria-expanded="false">
                                                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet                                            </a>
                                                        </h5>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="card-body">
                                                        <p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block department-doctor-list mb-5 ">
                                    <h4 className="heading-4">
                                        Awesome Doctors Of Anesthetics Department                        </h4>
                                    <span class="short-delimiter--style-1 mb-4"></span>
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
                                                                        <a style={{ textDecoration: "none", color: "black" }} className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
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
                                                </div>
                                            </div></div></div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
           <MainFooterComponent></MainFooterComponent>
        </div>
    )
}