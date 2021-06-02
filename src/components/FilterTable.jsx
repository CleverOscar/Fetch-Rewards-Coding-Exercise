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
    
    console.log(props)

    return(
        <tbody>
            data
            {group1}
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