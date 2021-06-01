import React, {Component} from 'react';
import axios from 'axios';

import TableList from './TableList';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: [],
        }
    }

    componentDidMount() {
        axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => {
            //  console.log(res.data)

            const userInfo = res.data.filter(el => el.name !== null && el.name !== "").sort((a, b) => {
                if (a.listId > b.listId || (a.listId === b.listId && a.id > b.id)) {
                    return 1
                } else {
                    return -1
                }
            });

            this.setState({fetchedData: userInfo})
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