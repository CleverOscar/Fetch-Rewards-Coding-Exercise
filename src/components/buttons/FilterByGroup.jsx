import React from 'react';


function FilterByGroup (props) {

    //
    // const id1 = (data) => {
    //     data = props.data.filter(el => el.listId === 1);
        
    //     console.log(data)
    // }
    // const id2 = (data) => {
    //     data = data = props.data.filter(el => el.listId === 2);

    //     console.log(data)
    // }
    // const id3 = (data) => {
    //     data = props.data.filter(el => el.listId === 3);

    //     console.log(data)
    // }
    // const id4 = (data) => {
    //     data = props.data.filter(el => el.listId === 4);

    //     for(let i = 0; i < data.length; i++){
    //         return <div> {data[i].id}</div>
    //     }
        
    // }

    const itemId1 = (array) => {
        // retrieved every element id
        array = props.data.map(el => el)

        console.log(array.filter(el => el.listId <= 1))

        // loop through array 
        // eliminate duplicates
    
    }

    const itemId2 = (array) => {
        // retrieved every element id
        array = props.data.map(el => el)

        console.log(array.filter(el => el.listId === 2))

        // loop through array 
        // eliminate duplicates

    }

    const itemId3 = (array) => {
        // retrieved every element id
        array = props.data.map(el => el)

        console.log(array.filter(el => el.listId === 3))

        // loop through array 
        // eliminate duplicates

    }
     const itemId4 = (array) => {
         // retrieved every element id
         array = props.data.map(el => el)

         console.log(array.filter(el => el.listId === 4))

         // loop through array 
         // eliminate duplicates

     }
    
    return(
        <div>
            <button onClick={itemId1}>1</button>
            <button onClick={itemId2}>2</button>
            <button onClick={itemId3}>3</button>
            <button onClick={itemId4}>4</button>
        </div>
    )
}

export default FilterByGroup;