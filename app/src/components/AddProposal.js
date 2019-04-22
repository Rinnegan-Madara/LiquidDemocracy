import React, { Component, Fragment } from 'react';

export default class AddProposal extends Component{
    state = {
        web3:{},
        contract:{},
        isMember:false
    }
    componentDidMount(){
        const { drizzleState } = this.props;
        const user = drizzleState.accounts[0];
        const { web3, contracts } = this.props.drizzle;
        const { LiquidDemocracy } = contracts;
        const { abi, address } = LiquidDemocracy;
        const contract = new web3.eth.Contract(abi,address);
        contract.methods.members(user).call({from:user},
            (error,result) => {
                this.setState({isMember:result});
            })

        this.setState({web3,contract});
    }
    render(){
        const { isMember, web3, contract } = this.state;
        return(
            <Fragment>
                Add Proposals
                {isMember ? <div>hello</div> : <div>You cannot add a proposal</div>}
            </Fragment>
        )
    }
}