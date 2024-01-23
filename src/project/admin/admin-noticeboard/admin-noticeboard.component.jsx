import { useEffect, useState } from "react";
import { AdminHeaderComponent } from "../adminheader/adminheader.component";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { GridComponent } from "../../../shared_component/grid_component/grid.component";
import { deleteNotice, getNotice } from "../../services/noticeboard.service";

export function AdminNoticeComponent() {
  const [showPopup, setShowPopup] = useState(false);

  // use effect
  useEffect(() => {
    getNoticeData();
  }, [])



  // Grid component data
  const [adminNoticeGridHeaders, setadminNoticeGridHeaders] = useState([
   "Id", "Title", "Description", "Start Date", "End Date", "Option"
  ]);
  const [adminNoticeGridData, setadminNoticeGridData] = useState([]);



  // Function to open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // create function for get data from api
  function getNoticeData() {
    getNotice().then((res) => {
      setadminNoticeGridData(res.data)
    })
  }



    // create function for delete
    function deleteNoticeItem(value) {
      let confirmDelete = window.confirm("Are You sure You want To Delete ?");

      if (confirmDelete == true) {
        deleteNotice(value.id).then((res) => {
        getNoticeData();

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
              <ArrowRightCircle></ArrowRightCircle>&nbsp; Notice</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-10'></div>
          <div className='col-2'>
            <div className="container mt-4">
              <button type="button" className="add_button" onClick={openPopup}>
                + Add Notice
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
              <h2>Add Notice</h2>
              <br></br>
              <br></br>
              <form className='container' method='post' action='http://localhost:4001/saveNotice/'>

                <div className="row">
                  <div className='col-3'>
                    <label>Title</label>
                  </div>
                  <div className='col-7'>
                    <input
                      type="text" className="form-control"
                      placeholder="Title"
                      id="title" name="title"
                     

                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className='col-3'>
                    <label>Description</label>
                  </div>
                  <div className='col-7'>
                    <textarea cols={10}  className="form-control"
                      placeholder="Description"
                      id="description" name="description"></textarea>
                    
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className='col-3'>
                    <label>Start Date</label>
                  </div>
                  <div className='col-7'>
                    <input
                      type="date" className="form-control"
                      placeholder="Start Date"
                      id="startDate" name="startDate"
                  

                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className='col-3'>
                    <label>End Date</label>
                  </div>
                  <div className='col-7'>
                    <input
                      type="date" className="form-control"
                      placeholder="End Date"
                      id="endDate" name="endDate"
                  

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
        
          headers={adminNoticeGridHeaders}
          body={adminNoticeGridData}
      
          deleteRecord={(value)=>{deleteNoticeItem(value)}}
        ></GridComponent>
      </form>
      <br></br> <br></br> <br></br>
      <div className='table-color'>
            <div className="may-month">
                <h3 style={{ color:' #373e4a'}}>January 2024</h3>
             
            </div>
            <table className="table table-bordered tabledecoration">
                <thead className="table-white">
                    <tr>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                        <th>SUN</th>

                    </tr>
                </thead>
                <tbody className="table-white">
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
   

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






      