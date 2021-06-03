import React, {Component} from 'react';
import axios from 'axios';

import TableList from './TableList';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: [],
            view: 'landingPage',
        }
    }


    // requesting data from server api
    componentDidMount() {
        axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => {

        // sort out our data by List ID then by Name
        const userInfo = res.data.filter(el => el.name !== null && el.name !== "").sort((a, b) => {
            if (a.listId > b.listId || (a.listId === b.listId && a.id > b.id)) {
                return 1
            } else {
                return -1
            }
        });
            // set the component state with the data we recieved
            this.setState({fetchedData: userInfo})
        }).catch(err => {
            this.setState({error: "Error retrieving data"})
        })
    }

    render(){
            return(
            <div>
                <button onClick={()=>{
                    this.setState({
                        view: 'landingPage'
                    })}}> Full List
                </button>
                <button onClick={()=>{
                    this.setState({
                        view: 'group1'
                    })}}> 1
                </button>
                <button onClick={()=>{
                    this.setState({
                        view: 'group2'
                    })}}> 2
                </button>
                <button onClick={()=>{
                    this.setState({
                        view: 'group3'
                    })}}> 3
                </button>
                <button onClick={()=>{
                    this.setState({
                        view: 'group4'
                    })}}> 4
                </button>

                <TableList data={this.state}/>
            </div>
        )
    }
}

export default ListComponent;








// //             <button onClick={()=>{
// console.log('clicked');

// this.setState({
//     view: 'group2'
// })


// }
// } > 2 < /button> <
//     button onClick = {
//         () => {
//             console.log('clicked');

//             this.setState({
//                 view: 'group3'
//             })


//         }
//     } > 3 < /button> <
//     button onClick = {
//         () => {
//             console.log('clicked');

//             this.setState({
//                 view: 'group4'
//             })

//         }
//     } > 4 < /button>