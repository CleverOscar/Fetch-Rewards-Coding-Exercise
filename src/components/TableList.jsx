import React from 'react';
import {Table} from 'reactstrap';
import './table.css';

// import UserData from './UserData';
import FilterByGroup from './buttons/FilterByGroup';

function TableList(props) {

    return(
        <div className="tableList">
            <FilterByGroup data={props.data}/>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                {/* <UserData data={props.data} /> */}
            </Table>
        </div>
    )
}


function UserData(props) {
    
    // filter out empty name properties such as null or ""
    const userInfo = props.data.map(el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>);

    return(
        <tbody>           
            {userInfo}
        </tbody>
    )
}


export default TableList;