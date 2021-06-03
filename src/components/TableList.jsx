import React from 'react';
import {Table} from 'reactstrap';
import './table.css';

import FilterTable1 from './FilterTable';

function TableList(props) {

    return(
        <div className="tableList">
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                {props.data.view === 'landingPage' ? <UserData data={props.data}/> : null}
                {props.data.view === 'group1' || 'group2' || 'group3' || 'group4' ? < FilterTable1 data = {props.data}/> : null}
            </Table>
        </div>
    )
}


function UserData(props) {
    
    const  userInfo = props.data.fetchedData.map(el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>);

    return(
        <tbody>           
            {props.data.fetchedData.map(el =>
            <tr key={el.id}>
                <th>{el.listId}</th>
                <td>
                    {el.name}
                </td>
            </tr>)}
        </tbody>
    )
}


// const itemId1 = (array) => {
//     array = props.data.fetched.map(el => el).filter(el => el.listId === 1)

// }




export default TableList;