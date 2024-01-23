import { Calendar, CalendarWeek } from 'react-bootstrap-icons';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';
import { MainheaderComponent } from '../../mainheader/mainheader.component';

import './appointments.component.css';
import { Link } from 'react-router-dom';
export function AppointmentsComponent() {

    return (
        <div>
            <div>
                <MainheaderComponent></MainheaderComponent>
                <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head appointments_bg_img" >
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-lg-12">
                                <h1 className="heading text-uppercase c-white" style={{ color: 'white' }}>
                                    Appointmetns               </h1>

                                <span className="clearfix"></span>

                                <div className="">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/home" style={{ color: 'white' }}>
                                                Home                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                            Appoinments                      </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="slice sct-color-2 b-xs-bottom">
                    <div className="container">
                        <div className="section-title section-title--style-1 text-center mb-3">
                            <h3 className="heading heading-2 strong-400" style={{ color: '#111111' }}>
                                Make An Appointment            </h3>
                            <span className="section-title-delimiter clearfix d-none"></span>
                        </div>
                    </div>
                </section>
                <br></br>
                <div>
                    <form className='container1' method='post' action='http://localhost:4001/saveAppointment/'>
                        <div  style={{color:'#818A91 '}}>
                            <div>
                                <label>NAME</label>
                            </div>
                            <div>
                                <input type="text" id="name" name="name" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>EMAIL</label>
                            </div>
                            <div>
                                <input type="text" id="email" name="email" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>PHONE</label>
                            </div>
                            <div>
                                <input type="text" id="phone" name="phone" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>DATE</label>
                            </div>
                            <div>
                                <input type="date" id="date" name="date" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>DEPARTMENT</label>
                            </div>
                            <div>
                                <input type="text" id="department" name="department" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>DOCTOR</label>
                            </div>
                            <div>
                                <input type="text" id="doctor" name="doctor" className='form-control'></input>
                            </div>
                            <br></br>
                            <div>
                                <label>MESSAGE</label>
                            </div>
                            <div>
                                <textarea cols={10} id="message" name="message" className='form-control'></textarea>
                              
                            </div>
                            <br></br>
                        </div>
                       
                        <button type="submit" className="btn btn-styled btn-base-1" style={{ cursor: 'pointer' }} >
                            <CalendarWeek></CalendarWeek> Book Now                    </button>
                            <br></br> <br></br>
                    </form>
                </div>

            </div>
            
            <MainFooterComponent></MainFooterComponent>
        </div>
    )
}