import { Facebook, Google, GooglePlay, Twitter, Youtube } from 'react-bootstrap-icons';
import './mainfooter.component.css';
export function MainFooterComponent() {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row cols-xs-space cols-sm-space cols-md-space">
                            <div className="col-md-6 col-lg-4">
                                <div className="col text-center">
                                    <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" width="60" alt=""></img>
                                    &nbsp; <p className="mt-3">Bayanno Diagnostic Center</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="col">
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Main Menu                        </h4>

                                    <ul className="footer-links">
                                        <li>
                                            <a href="/home" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Home                                </a>
                                        </li>
                                        <li>
                                            <a href="/doctors" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Doctors                                </a>
                                        </li>
                                        <li>
                                            <a href="/appointments" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Make An Appointment                                </a>
                                        </li>
                                        <li>
                                            <a href="/login" target="_blank" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Login                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="col">
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Help And Support                        </h4>

                                    <ul className="footer-links">
                                        <li>
                                            <a href="contactus" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Contact Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/aboutus" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                About Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/blog" style={{color:'#FFFFFFB3',textDecoration:'none'}}>
                                                Blog                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row row-cols-xs-spaced flex flex-items-xs-middle">
                            <div className="col col-sm-7 col-xs-12">
                                <div className="copyright text-xs-center text-sm-left">
                                    copyright@creativeitem | 2017                    </div>
                            </div>

                            <div className="col col-sm-5 col-xs-12 ">
                                <div className="text-xs-center text-sm-right">
                                    
                                    <div className="row social-media">
                                        <div className="col-12 ">
                                            <span>
                                                <Facebook></Facebook>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                                <Twitter></Twitter>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                                <Google></Google>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                             <Youtube></Youtube>
                                            </span>&nbsp;&nbsp;

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}