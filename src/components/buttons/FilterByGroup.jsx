import React, {useState} from 'react';
import FilterTable from '../FilterTable';


function FilterByGroup (props) {

    const [showResults, setShowResults] = useState(false);

    const itemId1 = (array) => {
        array = props.data.map(el => el
        ).filter(el => el.listId === 1)

        console.log(array)
    }

    const itemId2 = (array) => {
        array = props.data.map(el => el)

        console.log(array.filter(el => el.listId === 2))
    }

    const itemId3 = (array) => {
        array = props.data.map(el => el)

        console.log(array.filter(el => el.listId === 3))
    }
     const itemId4 = (array) => {
         array = props.data.map(el => el)

         console.log(array.filter(el => el.listId === 4))
     }
    
    return(
        <div>
            <button onClick={() =>{
                console.log(<FilterTable data={props.data} />)
            }}>1</button>
            <button onClick={itemId2}>2</button>
            <button onClick={itemId3}>3</button>
            <button onClick={itemId4}>4</button>
        </div>
    )
}

export default FilterByGroup;