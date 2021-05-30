import React, {Component} from 'react';
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
                {
                    error ? < div > {
                        error
                    } </div> : <TableList data={fetchedData}/>}

            </div>
        )
    }
}

export default ListComponent;