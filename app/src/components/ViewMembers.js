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
        console.log(LiquidDemocracy);
    }
    render(){
        console.log(this.props);
        return(
            <Fragment>
                Hello!
            </Fragment>
        );
    }
}