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
                    <th>ID</th>
                    <th>Item</th>
                    </tr>
                </thead>
                {props.data.view === 'landingPage' ? <UserData data={props.data}/> : null}
                {props.data.view === 'group1' || 'group2' || 'group3' || 'group4' ? < FilterTable1 data = {props.data}/> : null}
            </Table>
        </div>
    )
}

function UserData(props) {

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

export default TableList;