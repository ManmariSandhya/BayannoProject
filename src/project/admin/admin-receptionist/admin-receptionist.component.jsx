
import { useEffect, useRef, useState } from 'react';
import './admin-receptionist.component.css';
import { deleteReceptionist, getReceptionist } from '../../services/receptionist.service';
import { AdminHeaderComponent } from '../adminheader/adminheader.component';
import { GridComponent } from '../../../shared_component/grid_component/grid.component';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export function AdminReceptionistComponent() {
    // create a variables
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const propertyTypeIdRef = useRef(0);



    // create a variable for property type grid header
    const [propertyTypeGridHeader, setPropertyTypeGridHeader] = useState([
        "ID", "Name", "Email", "Address", "Phone", "Option"
    ]);

    // // create a variable for property type grid body 
    const [propertyTypeGridBodyData, setPropertyTypeGridBodyData] = useState([]);

    // create a variable for update button
    const [saveBtnText, setSaveBtnText] = useState('save');

    // create a variable for id
    const [propertyId, setPropertyId] = useState(0);
    // // to perform onload data using useEffect()
    useEffect(() => {
        getpropertyTypeData();
    }, [])

    // create a function for to save the data 
    // function savePropertyTypeData() {
    //     let data = {
    //         id: propertyId,
    //         propertyType: propertyTypeRef.current.value,
    //         description: descriptionRef.current.value,
    //         // isActive:true
    //     }
        // if (propertyId == 0) {
        //     savePropertyType(data)
        //         .then((res) => {
        //             setShowSaveMsg(true);
        //             // setShowUpdateMsg(true);
        //             // setShowDeleteMsg(true);
        //             clearData();
        //             getpropertyTypeData();
        //         }).catch(() => {
        //             setShowNotSaveMsg(true);
        //             clearData();
        //         })
        // }
        // else {
        //     updatePropertyType(data).
        //         then((res) => {
        //             setShowUpdateMsg(true);
        //             clearData();
        //             getpropertyTypeData();
        //         }).
        //         catch(() => {
        //             alert("Failed to save property")
        //         })
        // }
    // }

    // create a function for form refresh
    function clearData() {
        nameRef.current.value = '';
        emailRef.current.value = ' ';
        addressRef.current.value = ' ';
        phoneRef.current.value = ' ';
        propertyTypeIdRef.current.value = '';

        setSaveBtnText('save')
        setPropertyId(0);

    }


    // function for cancel massage
    function cancelMsg() {
        nameRef.current.value = '';
        emailRef.current.value = ' ';
        addressRef.current.value = ' ';
        phoneRef.current.value = ' ';

    }


    // create a function for property type data to get from API
    function getpropertyTypeData() {
        getReceptionist().then((res) => {
            setPropertyTypeGridBodyData(res.data);
        }

        )
    }
    // create a function for edit property type item
    function editPropertyTypeItem(value) {
        nameRef.current.value = value.name;
        emailRef.current.value = value.email;
        addressRef.current.value = value.address;
        phoneRef.current.value = value.phone;
        propertyTypeIdRef.current.value = value.id;
        setSaveBtnText('Update');
        setPropertyId(value.id);
    }

    // create a function for delete items from data base
    function deletePropertyTypeItem(value) {
        //this window.confirm key word is predefined word to delete record
        let confirmDelete = window.confirm("Are you sure you want to delete ?")
        if (confirmDelete == true) {

            if (confirmDelete == true) {
                deleteReceptionist(value.id).then((res) => {
                    clearData();
                    getpropertyTypeData();
                }).catch((err) => {
                    alert("data failed to delete ...")
                })
            }

            // let data = {
            //     id:value.id ,
            //     propertyType: value.propertyType,
            //     description: value.description,
            //     isActive:false
            // };
            // updatePropertyType(data).
            //     then((res) => {
            //         setShowUpdateMsg(true);
            //         clearData();
            //         getpropertyTypeData();
            //     }).
            //     catch(() => {
            //         alert("Failed to delete your property")
            //     })
        }
    }

    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <br></br>
            <div className='row'>
                    <div className='col-3'>
                        <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                            <ArrowRightCircle></ArrowRightCircle>&nbsp; Receptionist</h3>
                    </div>
                </div>
            <form method='post' action='http://localhost:4001/saveReceptionist'>
                <div>
                    <input type='hidden' ref={propertyTypeIdRef} name="propertyTypeId"></input>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <label><h5>Name:</h5></label>
                    </div>
                    <div className='col-7'>
                        <input
                            type="text" className='form-control' id='name' name="name" ref={nameRef}></input>

                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-2'>
                        <label><h5>Email:</h5></label>
                    </div>
                    <div className='col-7'>
                        <input
                            type="text" className='form-control' id='email' name="email" ref={emailRef}></input>

                    </div>
                </div>
                <br></br>
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label><h5>Address :</h5></label>
                    </div>
                    <div className='col-7'>
                        <textarea
                            className='form-control' id='address' name="address" ref={addressRef}></textarea>
                      
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-2'>
                        <label><h5>Phone :</h5></label>
                    </div>
                    <div className='col-7'>
                        <input
                            type="text" className='form-control' id='phone' name="phone" ref={phoneRef}></input>

                    </div>
                </div>
                <br></br>
                <div className='row mt-3'>
                    <div className='col-2'></div>
                    <div className='col-2'>

                        <input type="submit" value={saveBtnText} className='btn btn-success' ></input>&nbsp; &nbsp;
                        <input type='submit' value='Cancel' className='btn btn-danger' onClick={() => { cancelMsg() }}></input>
                    </div>


                </div>
                <br></br>
                <div>
                    <GridComponent
                        headers={propertyTypeGridHeader}
                        body={propertyTypeGridBodyData}
                        editItemFromGrid={(value) => { editPropertyTypeItem(value) }}
                        deleteRecord={(value) => { deletePropertyTypeItem(value) }}
                    ></GridComponent>
                </div>
            </form>
        </div>
    )
}