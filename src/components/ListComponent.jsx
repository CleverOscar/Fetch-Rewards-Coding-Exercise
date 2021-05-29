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
                {/* {fetchedData.length ? fetchedData.map(list => 
                    <div key={list.listId}> 
                        <p>{list.id}</p>  
                        <p>{list.name}</p> 
                    </div>) : null
                } */}
                <Input type="text" placeholder="Search for names.." />
                <Input type="select" placeholder="ID Group"> 
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
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