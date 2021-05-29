import React, {Component} from 'react';
import List from './List';
import axios from 'axios';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div>
                <List />
            </div>
        )
    }
}

export default ListComponent;