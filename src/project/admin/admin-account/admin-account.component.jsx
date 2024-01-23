import { ArrowRightCircle } from 'react-bootstrap-icons';
import { AdminHeaderComponent } from '../adminheader/adminheader.component';
import './admin-account.component.css';
import { AdminAccountChangepasswordComponent } from '../admin-accountChangepassword/admin-accountChangepassword.component';
export function AdminAccountComponent() {
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <div className='row'>
                <div className='col-3'>
                    <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                        <ArrowRightCircle></ArrowRightCircle>&nbsp;  Manage Profile</h3>
                </div>
            </div>
           
                <div className='profile'>
                    <div>
                        <h4 >Edit Profile</h4>
                        <form className='container-account' method='post' action='http://localhost:4001/saveEditProfile/'>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Name</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="name" name="name" className="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' style={{ color: '#818A91 ' }}>
                                <div className='col-3'>
                                    <label><strong><h6>Email</h6></strong></label>
                                </div>
                                <div className='col-8'>
                                    <input type='text' id="email" name="email" className="form-control"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row' >
                                <div className='col-3'></div>
                                <div className='col-4' >

                                    <input type='submit' value="Update Profile" className='account-update-button' ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
               <AdminAccountChangepasswordComponent></AdminAccountChangepasswordComponent>
            
            <br></br> <br></br>
            <footer className="main">
            <div className="row">
                    <div className="col-6">
                        © 2017 <strong>Bayanno Hospital Management System</strong>

                        Developed by
                        <a >Creativeitem</a>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-2">
                        <strong className="pull-right"> VERSION 4.0</strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}