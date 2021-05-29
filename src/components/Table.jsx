import React from 'react';
import {Table} from 'reactstrap';
import './table.css';

import List from './List';

function TableList(props) {

    const filter1 = props.data.filter(item => item.listId === 1)
    const filter2 = props.data.filter(item => item.listId === 2)
    const filter3 = props.data.filter(item => item.listId === 3)
    const filter4 = props.data.filter(item => item.listId === 4)
    const filter5 = props.data.filter(item => item.listId === 5)

    console.log(filter1, filter2, filter3, filter4, filter5)

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
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableList;
