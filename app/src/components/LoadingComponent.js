export default ({initialized, children}) =>{
    if(initialized === false){
        return 'Loading...';
    }
    return children;
};
