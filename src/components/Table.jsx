import React from 'react';
import {Table} from 'reactstrap';
import './table.css';

import UserData from './UserData';


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
                <UserData data={props.data} />
            </Table>
        </div>
    )
}


export default TableList;
