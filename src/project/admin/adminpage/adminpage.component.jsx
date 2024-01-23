import { ArrowRightCircle } from 'react-bootstrap-icons';
import { AdminHeaderComponent } from '../adminheader/adminheader.component';
import './adminpage.component.css';

export function AdminpageComponent() {
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                <ArrowRightCircle></ArrowRightCircle>&nbsp; Admin Dashboard</h3>
            <div className="row">
                <div className="col-sm-3">
                    <a  style={{textDecoration:'none'}}>
                        <div className="tile-stats tile-white tile-white-primary">
                            <div className="icon"><i className="fa fa-user-md"></i></div>
                            <h1>2</h1>
                            <h5>Doctor</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-red" style={{ color: 'orangered' }}>
                            <div className="icon"><i className="fa fa-user"></i></div>
                            <h1>1</h1>
                            <h5>Patient</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-aqua" style={{ color: '#00c0ef' }}>
                            <div className="icon"><i className="fa fa-plus-square"></i></div>
                            <h1>1</h1>
                            <h5>Nurse</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-blue" style={{ color: '#0073b7' }}>
                            <div className="icon"><i className="fa fa-medkit"></i></div>
                            <h1>1</h1>
                            <h5>Pharmacist</h5>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white tile-white-primary" style={{ color: '#00b29e' }}>
                            <div className="icon"><i className="fa fa-user-md"></i></div>
                            <h1>1</h1>
                            <h5>Laboratorist</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-red" style={{ color: '#ba79cb' }}>
                            <div className="icon"><i className="fa fa-user"></i></div>
                            <h1>1</h1>
                            <h5>Accountant</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-aqua" style={{ color: '#ec3b83' }}>
                            <div className="icon"><i className="fa fa-plus-square"></i></div>
                            <h1>0</h1>
                            <h5>Payment</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a>
                        <div className="tile-stats tile-white-blue" style={{ color: '#ffa812' }}>
                            <div className="icon"><i className="fa fa-medkit"></i></div>
                            <h1>0</h1>
                            <h5>Medicine</h5>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white tile-white-primary" style={{ color: '#00a65a' }}>
                            <div className="icon"><i className="fa fa-user-md"></i></div>
                            <h1>1</h1>
                            <h5>Operation Report</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-red" style={{ color: '#6c541e' }}>
                            <div className="icon"><i className="fa fa-user"></i></div>

                            <h5>Birth Report</h5>
                        </div>
                    </a>
                </div>

                <div className="col-sm-3">
                    <a >
                        <div className="tile-stats tile-white-aqua" style={{ color: '#701c1c' }}>
                            <div className="icon"><i className="fa fa-plus-square"></i></div>

                            <h5>Death Report</h5>
                        </div>
                    </a>
                </div>
            </div>
            <br></br> <br></br>
            <footer class="main">
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