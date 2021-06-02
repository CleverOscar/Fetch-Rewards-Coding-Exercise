import React, {useState} from 'react';


const FilterTable = (props) => {

    const itemId1 =  props.data.fetchedData.map(el => el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>).filter(el => el.listId === 1)

    const itemId2 =  props.data.fetchedData.map(el => el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>).filter(el => el.listId === 2)
    

    const itemId3 =  props.data.fetchedData.map(el => el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>).filter(el => el.listId === 3)

    const itemId4 =  props.data.fetchedData.map(el => el => <div>
         <tr key={el.id}>
            <th>{el.listId}</th>
            <td>
                {el.name}
            </td>
        </tr>
    </div>).filter(el => el.listId === 4)


    const conditional = ()=> {
        if (props.data.view === "group1"){
            return 'group1'
        } else if (props.data.view === "group2"){
            return 'group2'
        } else if (props.data.view === "group3"){
            return 'group3'
        } else if (props.data.view === "group4"){
            return 'group4'
        } else {
            return null
        }
    }
    
    return(
        <tbody>
            Filter Components
            
        </tbody>
    )
}

export default FilterTable;