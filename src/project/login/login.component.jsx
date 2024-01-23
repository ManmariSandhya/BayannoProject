
import './login.component.css';
import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBIcon,MDBInput}
    from 'mdb-react-ui-kit';
import loginpagephoto from '../../assets/images/loginpagephoto.jpg';
import { useNavigate } from 'react-router-dom';
import { getLoginUser } from '../services/login.service';
import { setSessionStorageItem } from '../services/storages/sessionstorage.service';
import store from '../services/storages/redux.service';

export function LoginComponent() {
    //creation of variable in navigate
    const navigate = useNavigate();

    function loginUser(){
        const registeredEmail = document.getElementById("email").value;
        const registeredPassword = document.getElementById("password").value;
        getLoginUser().
        then((res)=>{
            let filterData = res.data.filter((item,index,arr) => item.email == registeredEmail && item.password == registeredPassword);
            if(filterData.length>0){
                setSessionStorageItem("Login",filterData)
                 store.dispatch({type:"useData",data:filterData})
               navigate("/admin/adminpage");
            }
            else{
                alert("User not exist")
            }

        })

    }
    return (
        
        <MDBContainer fluid className='login'>
           
            <MDBRow>

                <MDBCol sm='5' style={{ backgroundColor: 'black',height:'740px' }}>

                    <div className='d-flex flex-row ps-5 pt-5'>
                        <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                        <span className="h1 fw-bold mb-0"></span>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                        <a href="http://localhost:3000/" >
                            <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" height="60" className="rounded mx-auto d-block" alt="" ></img>
                        </a>
                        <h3 className="fw-normal mb-3 ps-5 pb-3 fw-bold mb-0" style={{ letterSpacing: '1px', color: 'white' }}>&nbsp;&nbsp;&nbsp;Bayanno Hospital Management System</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Email' id='email' type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Password' id='password' type='password' size="lg" />

                        {/* <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={()=>{loginUser()}}>Login</MDBBtn> */}
                        <input type='button' className='form-control mb-4 px-5 mx-5 w-100 ' style={{backgroundColor:'#2191bf',color:'white',borderColor:'#2191bf'}} size="lg" value="Login" onClick={()=>{loginUser()}}></input>
                      

                        <p style={{ color: 'white', textAlign:'center' }}>Forgot Your Password ?</p>
                    </div>

                </MDBCol>

                <MDBCol sm='7' className='d-none d-sm-block px-0'>
                    <img src={loginpagephoto}
                        alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left', height: '100%' }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}