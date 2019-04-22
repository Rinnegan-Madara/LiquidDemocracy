import React, { Component, Fragment } from 'react';

export default class AddProposal extends Component{
    state = {
        isMember:false,
        text:'',
        expiry:'',
        txId:''
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
    }
    handleTextChange = e =>{
        this.setState({text:e.target.value});
    }
    handleExpiryChange = e =>{
        this.setState({expiry:e.target.value*86400});
    }
    handleSubmit = e => {
        e.preventDefault();
        const { drizzle, drizzleState } = this.props;
        const { text, expiry } = this.state;
        const { LiquidDemocracy } = drizzle.contracts;
        console.log(LiquidDemocracy);

        const txId = LiquidDemocracy
            .methods['addProposal']
            .cacheSend(
                text,
                expiry,
                {from: drizzleState.accounts[0]}
            );
        this.setState({txId});
    }
    render(){
        const { isMember, txId } = this.state;
        const { transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[txId];
        return(
            <Fragment>
                Add Proposals
                {isMember ?
                <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter your proposal here</p>   
                    <textarea onChange={this.handleTextChange} required></textarea><br/>
                    <label htmlFor="expiry">Enter duration of validity, starting now, in days:</label>
                    <input type="number" 
                        onChange={this.handleExpiryChange}
                        defaultValue="0"
                        min="0"
                        required/>     
                        <br/>
                    <button type="submit">Submit</button>
                </form>
                <p>{txHash ? `Transaction status: ${transactions[txHash]
                    && transactions[txHash].status}`: null}</p>
                </Fragment>
                 : 
                 <div>You are not a member and cannot add a proposal</div>
                }
            </Fragment>
        )
    }
}