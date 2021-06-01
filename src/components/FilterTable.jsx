import React from 'react';

function FilterTable(props) {
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

export default FilterTable;