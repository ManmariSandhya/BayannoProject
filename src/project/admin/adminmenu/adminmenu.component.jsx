import './adminmenu.component.css';
import img5 from '../../../assets/images/img5.jpg';
import avatar from '../../../assets/images/avatar.jpg';
import { CapsulePill, Envelope, GearWide, Laptop, List, ListTask, Person, PersonFill, Prescription2, Tag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export function AdminmenuComponent() {
    return (
        <div style={{ backgroundColor: '#2c2e3e', color: 'white' }}>
            <div className="sidebar-menu">
                <header className="logo-env">
                    {/* <!-- logo --> */}

                    <div className="logo" >
                        <a href="https://demo.creativeitem.com/bayanno/login">
                            <img src={img5} style={{ height: '60px' }}></img>
                        </a>
                        <ListTask style={{ color: 'white', marginLeft: '230px', fontSize: '35px' }}></ListTask>
                    </div>
                </header>
            </div>
            <br></br> <br></br>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <img src={avatar} className='admin_logo' style={{ width: '180%', height: '70px', borderRadius: '35px' }}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-4'><h5>Welcome</h5>
                    <h3>Mr.Admin</h3></div>
            </div>
            <div>
                <ul className='menu'>
                    <Link to="/admin/adminpage" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Laptop></Laptop> &nbsp;    Dashboard</li>
                    </Link>
                    <br></br>
                    
                    <Link to="/admin/admin-department" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person>  &nbsp;       Department</li>
                    </Link>
                    <br></br>

                    <Link to="/admin/admin-doctor" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person>  &nbsp;         Doctor</li>
                    </Link>
                    <br></br>

                    <Link to="/admin/admin-patient" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person> &nbsp;     Patient</li>
                    </Link> <br></br>

                    <Link to="/admin/admin-nurse" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Prescription2></Prescription2>  &nbsp;  Nurse</li>
                    </Link><br></br>

                    <Link to="/admin/admin-pharmacist" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><CapsulePill></CapsulePill>  &nbsp;  Pharmacist</li>
                    </Link> <br></br>

                    <Link to="/admin/admin-laboratorist" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><PersonFill></PersonFill>  &nbsp;  Laboratorist</li>
                    </Link> <br></br>

                    <Link to="/admin/admin-accountant" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person>   &nbsp;  Accountant</li>
                    </Link><br></br>

                    <Link to="/admin/admin-receptionist" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person>  &nbsp;  Recetionist</li>
                    </Link>

                    <br></br>
                    <li className='menu-li' style={{ textDecoration: "none", color: "white", marginLeft: "0px" }} >
                        <div class="accordion menu-li" id="accordionExample">
                            <div class="accordion-item" id="btnss">
                                <h2 class="accordion-header">
                                    <button style={{ textDecoration: "none", color: "white", marginLeft: "0px" }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                        <a>
                                            <li style={{ textDecoration: "none", color: "white" }}>
                                                {/* <svg id="qwe" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
                                                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7" />
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>  */}
                                                <GearWide></GearWide>&nbsp;&nbsp;&nbsp;Monitor-Hospital</li></a> &nbsp;
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/header-payment" style={{ textDecoration: "none", color: "white" }}>  <p>Payment History</p> </Link>

                                        <Link to="/header-bed" style={{ textDecoration: "none", color: "white" }}> <p>Bed Allotment</p>  </Link>

                                        <Link to="/header-blood" style={{ textDecoration: "none", color: "white" }}> <p>Blook Bank</p> </Link>

                                        <Link to="/header-medicine" style={{ textDecoration: "none", color: "white" }}><p>Medicine</p> </Link>

                                        <Link to="/header-operation" style={{ textDecoration: "none", color: "white" }}><p>Operation Report</p> </Link>

                                        <Link to="/header-birth" style={{ textDecoration: "none", color: "white" }}><p>Birth Report</p> </Link>

                                        <Link to="/header-death" style={{ textDecoration: "none", color: "white" }}> <p>Death Report</p> </Link>
                                    </div>
                                </div>
                            </div>
                        </div></li>
                        <br></br>
                    <li className='menu-li'><Tag></Tag>  &nbsp;   Payroll</li> <br></br>

                    <Link to="/admin/admin-notice" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><List></List>   &nbsp;  Notice Board</li>
                    </Link><br></br>
                    <li className='menu-li'><GearWide></GearWide> &nbsp;  Settings</li> <br></br>


                    <li className='menu-li'><Laptop></Laptop>   &nbsp;  FontEnd</li> <br></br>

                    <Link to="/admin/admin-contactemails" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Envelope></Envelope>&nbsp;   Contact Emails</li>
                    </Link> <br></br>

                    <Link to="/admin/admin-account" style={{ color: 'white', textDecoration: 'none' }}>
                        <li className='menu-li'><Person></Person>  &nbsp;  Account</li> <br></br>
                    </Link>

                </ul>
            </div>
        </div>
    )
}