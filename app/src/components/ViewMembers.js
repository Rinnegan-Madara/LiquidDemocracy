import React, { Component, Fragment } from 'react';

export default class ViewMembers extends Component{
    state = {
        web3:{},
        contract:{},
        events:[]
    };
    componentDidMount(){
        const { web3, contracts } = this.props.drizzle;
        const { LiquidDemocracy } = contracts;
        const { abi, address } = LiquidDemocracy;
        const contract = new web3.eth.Contract(abi,address);

        this.setState({web3,contract});
        let events= [];
        contract.events.memberAdded(
            {
                fromBlock:0
            },
            (error,event) => {
                // console.log(event);
                events.push(event);
                this.setState({events});
            }
        );
        // console.log(contract.events);
    }
    render(){
        let { events } = this.state;
        return(
            <Fragment>
                Hello!
                <ul>
                    {
                        events.map((event)=>(
                            <li key={event.returnValues[0]}>
                            {event.returnValues[0]}
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        );
    }
}