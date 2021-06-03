import React from 'react';


const FilterTable1 = (props) => {

    const group1 = props.data.fetchedData.filter(el => el.listId === 1).map(el =>
                <tr key={el.id}>
                    <th>{el.listId}</th>
                    <td>
                        {el.name}
                    </td>
                </tr>
                )

    const group2 = props.data.fetchedData.filter(el => el.listId === 2).map(el =>
                <tr key={el.id}>
                    <th>{el.listId}</th>
                    <td>
                        {el.name}
                    </td>
                </tr>
                )

    const group3 = props.data.fetchedData.filter(el => el.listId === 3).map(el =>
    <tr key={el.id}>
        <th>{el.listId}</th>
        <td>
            {el.name}
        </td>
    </tr>
    )            
    
    const group4 = props.data.fetchedData.filter(el => el.listId === 4).map(el =>
    <tr key={el.id} >
        <th>{el.listId}</th>
        <td>
            {el.name}
        </td>
    </tr>
    )

    return(
        <tbody>
            {props.data.view === 'group1' ? group1 : null}
            {props.data.view === 'group2' ? group2 : null}
            {props.data.view === 'group3' ? group3 : null}
            {props.data.view === 'group4' ? group4 : null}
        </tbody>
    )
}

export default FilterTable1;