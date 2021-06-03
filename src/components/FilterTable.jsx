import React, {useState} from 'react';


const FilterTable1 = (props) => {

    const group1 = props.data.fetchedData.filter(el => el.listId === 1).map(el => <div>
                <tr key={el.id}>
                    <th>{el.listId}</th>
                    <td>
                        {el.name}
                    </td>
                </tr>
                </div>)

    const group2 = props.data.fetchedData.filter(el => el.listId === 2).map(el => <div>
                <tr key={el.id}>
                    <th>{el.listId}</th>
                    <td>
                        {el.name}
                    </td>
                </tr>
                </div>)

    const group3 = props.data.fetchedData.filter(el => el.listId === 3).map(el => <div>
    <tr key={el.id}>
        <th>{el.listId}</th>
        <td>
            {el.name}
        </td>
    </tr>
    </div>)            
    
    const group4 = props.data.fetchedData.filter(el => el.listId === 4).map(el => <div>
    <tr key={el.id}>
        <th>{el.listId}</th>
        <td>
            {el.name}
        </td>
    </tr>
    </div>)

    console.log(props)

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




    // const itemId1 =  props.data.fetchedData.map(el => el => <div>
    //      <tr key={el.id}>
    //         <th>{el.listId}</th>
    //         <td>
    //             {el.name}
    //         </td>
    //     </tr>
    // </div>).filter(el => el.listId === 1)

    // const itemId2 =  props.data.fetchedData.map(el => el => <div>
    //      <tr key={el.id}>
    //         <th>{el.listId}</th>
    //         <td>
    //             {el.name}
    //         </td>
    //     </tr>
    // </div>).filter(el => el.listId === 2)
    

    // const itemId3 =  props.data.fetchedData.map(el => el => <div>
    //      <tr key={el.id}>
    //         <th>{el.listId}</th>
    //         <td>
    //             {el.name}
    //         </td>
    //     </tr>
    // </div>).filter(el => el.listId === 3)

    // const itemId4 =  props.data.fetchedData.map(el => el => 
    //      <tr key={el.id}>
    //         <th>{el.listId}</th>
    //         <td>
    //             {el.name}
    //         </td>
    //     </tr>
    // ).filter(el => el.listId === 4)