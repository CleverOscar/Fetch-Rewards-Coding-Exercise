import React from 'react';
import GroupTable from './buttons/FilterByGroup'

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

export default UserData;