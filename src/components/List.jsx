import React from 'react';
// import axios from 'axios';

function List(props) {

    console.log(props.data)

    return(
        <div>
            {props.data.map(item => 
            <tr key={item.id}>
                <th scope="row">{item.listId}</th>
                <td>{item.name}</td>
            </tr>)}
        </div>
    )
}


export default List;