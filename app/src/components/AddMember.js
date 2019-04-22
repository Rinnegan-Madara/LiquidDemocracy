import React, { Component } from 'react';

class AddMember extends Component{
    state = {
        data:'',
        txId:''
    }
    handleChange = e =>{
        this.setState({data:e.target.value});
    }
    handleClick = e =>{
        e.preventDefault();
        const { drizzle, drizzleState } = this.props;
        const { data } = this.state;
        const LiquidDemocracy = drizzle.contracts.LiquidDemocracy;

        console.log(this.props);

        const txId = LiquidDemocracy
            .methods['addMember']
            .cacheSend(
                data,
                {from: drizzleState.accounts[0]}
            );
        this.setState({txId});
    }
    render(){
        // console.log(this.props);
        // var transactions, txHash, transactionStack;
        // if(this.props.drizzleState !== null){
            const { transactions, transactionStack } = this.props.drizzleState;
            const txHash = transactionStack[this.state.txId];
        // }
        return(
            <div id="form">
                <form>
                    <label htmlFor="address">Enter Address:</label>
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                <p>{txHash ? `Transaction status: ${transactions[txHash]
                && transactions[txHash].status}`: null}</p>
            </div>
        )
    }
}

export default AddMember;