import React from 'react';
// import axios from 'axios';

function UserData(props) {
    
    // filter out empty name properties such as null or ""
    const showData = props.data.filter(el => el.name !== null && el.name !== "");

    // sorting Data by listId
    showData.sort((a, b) => {
    if (a.listId > b.listId || (a.listId === b.listId && a.id > b.id)) {
        return 1
    } else {
        return -1
    }
    });
    
    const userInfo = showData.map(el => <div>
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

export default UserData;