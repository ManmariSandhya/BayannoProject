import { PencilSquare, Trash } from 'react-bootstrap-icons';
import './grid.component.css';
import avatar from '../../assets/images/avatar.jpg';
export function GridComponent(props) {
    //    create a function for edit item 
    function editItem(value) {

        props.editItemFromGrid(value);
    }

    // create a function for delete item
    function deleteItem(value) {
        props.deleteRecord(value);
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>{props.title}</h3>
            <br></br>
            <table className='table table-bordered table-hover table-striped grid-table'>
                <thead className=' table-light'>
                    <tr>
                        {
                            props.headers.map((value) => <th style={{ color: ' #a6a7aa' }}>{value}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        props.body.map((value) => <tr>{
                            Object.values(value).map((value) => <td>{value}</td>)}
                            <td>
                                <button type='button' className="edit-icon">

                                    <PencilSquare onClick={() => { editItem(value) }}></PencilSquare> Edit
                                </button>
                                <button type='button' className='delete-icon' >
                                    <Trash onClick={() => { deleteItem(value) }}></Trash> Delete
                                </button>
                            </td>
                        </tr>
                        )

                    }
                </tbody>
            </table>

        </div>
    )
}