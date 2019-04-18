pragma solidity ^0.5.0;

contract LiquidDemocracy{
    struct Proposal{
        uint id;
        string proposalName;
        uint votes;
        uint expiry;
        bool approved;
    }
    address admin;
    uint nextProposalId;
    uint numMembers;
    mapping(address=>bool) members;
    mapping(uint=>Proposal)public proposals;
    mapping(address=>mapping(uint=>bool))voted;
    
    event memberAdded(address);
    event proposalApproved(string,uint);
    
    constructor()public {
        admin = msg.sender;
        members[admin] = true;
        nextProposalId=1;
        numMembers=1;
    }

    function addMember(address _member)external onlyAdmin() {
        require(msg.sender==admin);
        members[_member] = true;
        numMembers++;
        emit memberAdded(_member);
    }
    
    function addProposal(string calldata proposal, uint expiry)onlyMembers() external{
        proposals[nextProposalId] = Proposal(nextProposalId,proposal,0,now+expiry,false);
        nextProposalId++;
    }
    function vote(uint id) onlyMembers() external{
        require(id<nextProposalId);
        require(now<proposals[id].expiry);
        require(voted[msg.sender][id]==false);
        voted[msg.sender][id]=true;
        proposals[id].votes++;
        if(proposals[id].votes>numMembers/2 && proposals[id].approved==false){
            proposals[id].approved=true;
            emit proposalApproved(proposals[id].proposalName,now);
        }
    }
    modifier onlyMembers(){
        require(members[msg.sender]==true);
        _;
    }
    modifier onlyAdmin(){
        require(msg.sender==admin);
        _;
    }
}