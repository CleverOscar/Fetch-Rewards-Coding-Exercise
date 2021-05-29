import React, {Component} from 'react';
import List from './List';
import axios from 'axios';

import TableList from './Table';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: []
        }
    }

    componentDidMount() {
        axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => {
            //  console.log(res.data)
            this.setState({fetchedData: res.data})
        }).catch(err => {
            this.setState({error: "Error retrieving data"})
        })
    }
    
    render(){

        const {fetchedData, error} = this.state; 

        return(
            <div>
                {/* {fetchedData.length ? fetchedData.map(list => 
                    <div key={list.listId}> 
                        <p>{list.id}</p>  
                        <p>{list.name}</p> 
                    </div>) : null
                } */}

                {error ? <div>{error}</div> : <div>Fetching Data</div>}
                
                <TableList data={fetchedData}/>

            </div>
        )
    }
}

export default ListComponent;