import React, {Component} from 'react';
import axios from 'axios';

import TableList from './Table';

import {Input} from 'reactstrap';

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
                <Input type="text" placeholder="Search for names.." />
                <Input type="select" placeholder="ID Group"> 
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </Input>
                {
                    error ? < div > {
                        error
                    } </div> : <TableList data={fetchedData}/>}

            </div>
        )
    }
}

export default ListComponent;