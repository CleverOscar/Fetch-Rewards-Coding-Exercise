import React from 'react';
import {Row, Col, Table} from 'reactstrap';
import './table.css';

function TableList(props) {

    const idList = props.data.map(listItem => <div>{listItem.listId}</div>)
    const listName = props.data.map(listItem => <div>{listItem.name}</div>)

    console.log(idList)
    return(
        <div className="tableList">
            <Row>
                <Col>
                    <Table>

                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <th>{idList}</th>
                        <td>{listName}</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </div>
    )
}

export default TableList;
