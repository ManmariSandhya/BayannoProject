
import { useEffect, useRef, useState } from 'react';
import './admin-laboratorist.component.css';
import { deleteLaboratorist, getLaboratorist, saveLaboratorist } from '../../services/laboratorist.service';
import { AdminHeaderComponent } from '../adminheader/adminheader.component';
import { GridComponent } from '../../../shared_component/grid_component/grid.component';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export function AdminLaboratoristComponent() {
    const [showPopup, setShowPopup] = useState(false);
   


    // use effect
    useEffect(() => {
      getLaboratoristData();
    }, [])



    // Grid component data
    const [adminLaboratoristGridHeaders, setadminLaboratoristGridHeaders] = useState([
        "Id", "Name", "Email", "Address", "Phone", "Option"
    ]);
    const [adminLaboratoristGridData, setadminLaboratoristGridData] = useState([]);



    

    // Function to open the popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    // create function for get data from api
    function getLaboratoristData() {
        getLaboratorist().then((res) => {
            setadminLaboratoristGridData(res.data);
        })
    }



    // create function for delete
    function deleteLaboratoristItem(value) {
        let confirmDelete = window.confirm("Are You sure You want To Delete ?");

        if (confirmDelete == true) {
            deleteLaboratorist(value.id).then((res) => {
                getLaboratoristData();

            })
        }
    }

   
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <form className="container Bayanno-form">
                <div className='row'>
                    <div className='col-3'>
                        <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                            <ArrowRightCircle></ArrowRightCircle>&nbsp; Laboratorist</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'></div>
                    <div className='col-2'>
                        <div className="container mt-4">
                            <button type="button" className="add_button" onClick={openPopup}>
                                + Add Laboratorist
                            </button>
                        </div>
                    </div>
                </div>


                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <div className='row'>
                                <div className='col-11'>
                                    <h4>Bayanno Hospital Mangaement System</h4>
                                </div>
                                <div className='col-1'>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closePopup}></button>
                                </div>
                            </div>
                            <br></br>
                            <hr></hr>
                            <h2>Add Laboratorist</h2>
                            <br></br>

                            <form className='container' method='post' action='http://localhost:4001/saveLaboratorist/' >

                                <div className="row">
                                    <div className='col-3'>
                                        <label>Name</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="username"
                                            id="name" name="name"
                                       

                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Email</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Email"
                                            id="email" name="email"
                                           

                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Address</label>
                                    </div>
                                    <div className='col-7'>
                                        <textarea
                                            className="form-control"
                                            id="address" name="address"
                                            rows="5"
                                         
                                        ></textarea>

                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Phone</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Phone"
                                            id="phone" name="phone"
                                            

                                        />
                                    </div>
                                </div>
                                <br></br>


                                <div className='row'>
                                    <div className='col-3'></div>
                                    <div className='col-7'>
                                        <input
                                            type="submit"
                                            value="Save"
                                            className="btn btn-success w-150 mt-3"
                                        
                                        ></input>
                                        &nbsp; &nbsp;&nbsp;
                                        <input
                                            type="submit"
                                            value="Cancel"
                                            className="btn btn-danger w-150 mt-3"
                                            
                                        ></input>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Grid Component */}

                <GridComponent

                    headers={adminLaboratoristGridHeaders}
                    body={adminLaboratoristGridData}
                   
                    deleteRecord={(value)=>{deleteLaboratoristItem(value)} }
                ></GridComponent>
            </form>

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