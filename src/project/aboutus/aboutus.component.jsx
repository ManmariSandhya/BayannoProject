import { Link } from 'react-router-dom';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';
import { MainheaderComponent } from '../../mainheader/mainheader.component';
import './aboutus.component.css';
export function AboutusComponent() {
    return (
        <div>
            <MainheaderComponent></MainheaderComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head about_bg_img"  >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase c-white" style={{ color: 'white' }}>
                                About Us                </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white' }}>
                                            Home                            </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        About Us                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice sct-color-1 pb-0" id="scrollToSection about_bg_img">
                <div className="container no-padding">
                    <div className="row row-no-padding">
                        <div className="col-md-12">
                            <div className="section-title section-title--style-1 text-center mb-4">
                                <h3 className="section-title-inner text-uppercase">
                                    About Bayanno Diagnostic Center                    </h3>
                                <span className="section-title-delimiter clearfix d-none"></span>
                            </div>

                            <span className="clearfix"></span>

                            <div className="text-center " style={{ fontSize: "20px" }}>
                                <div className="fluid-paragraph fluid-paragraph-md c-gray-light about-text">
                                    Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                                    Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi.
                                    Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                                    Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.<br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi.
                                    Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem. Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi.
                                    Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem. Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi.
                                    Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.<br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
            </section>
            <section className="slice slice--arrow bg-base-1">
                <div className="sct-inner container">
                    <div className="section-title section-title-inverse section-title--style-1 text-center">
                        <h3 className="section-title-inner" style={{ color: 'white' }}>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h3>Modern hospital and technology</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row para'>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h3>Ready for intervention</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <h3> Specialist consulting for health problems</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='col-1'></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <Link to="/appointments" style={{ textDecoration: "none" }}>
                <button style={{ backgroundColor: ' #177196', marginLeft: "42%", color: 'white', padding: '10px', borderColor: ' #177196' }}>Make a Appointment</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MainFooterComponent></MainFooterComponent>
        </div>
    )
}

