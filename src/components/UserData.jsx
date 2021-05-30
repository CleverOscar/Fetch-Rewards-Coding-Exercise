import React from 'react';
// import axios from 'axios';

function UserData(props) {

    const showVisibleData = props.data.filter(el => el.name !== null && el.name !== "");

    console.log(showVisibleData)

    return(
        <tr>
            <th>Group: </th>
            <td>
                User Data
            </td>
        </tr>
    )
}


export default UserData;