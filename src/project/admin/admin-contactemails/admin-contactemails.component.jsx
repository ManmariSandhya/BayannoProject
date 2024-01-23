import { useState } from 'react';
import './admin-contactemails.component.css';
import { GridComponent } from '../../../shared_component/grid_component/grid.component';
import { AdminHeaderComponent } from '../adminheader/adminheader.component';
import { ArrowRightCircle } from 'react-bootstrap-icons';
export function AdminContactEmailsComponent() {
    // Grid component data
    const [adminContactEmailsGridHeaders, setadminContactEmailsGridHeaders] = useState([
        "Id", "Date", "Name", "Email","Phone","Address","Message","Option"
    ]);
    const [adminContactEmailsGridData, setadminContactEmailsGridData] = useState([]);
    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <div className='row'>
          <div className='col-3'>
            <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
              <ArrowRightCircle></ArrowRightCircle>&nbsp; Contact Emails</h3>
          </div>
        </div>
            <GridComponent

                headers={adminContactEmailsGridHeaders}
                body={adminContactEmailsGridData}
            ></GridComponent>
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