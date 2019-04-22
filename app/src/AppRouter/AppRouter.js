import React, { Fragment } from 'react';
import { DrizzleContext } from 'drizzle-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddMember from '../components/AddMember';
import ViewMembers from '../components/ViewMembers';
import AddProposal from '../components/AddProposal';

const AppRouter = (props) => (
    <DrizzleContext.Consumer>
    {drizzleContext => {
        const { initialized, drizzleState, drizzle } = drizzleContext;
        return (
            <LoadingComponent initialized={initialized}>
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route path='/' render={Dashboard} exact={true} />
                            <Route path='/AddMember' 
                                render={()=>(<AddMember 
                                    drizzle={drizzle} 
                                    drizzleState={drizzleState}/>)} 
                                exact={true} />
                            <Route path='/MembersList' 
                                render={()=>(<ViewMembers
                                    drizzle={drizzle}
                                    drizzleState={drizzleState}/>)}
                                exact={true}/>
                            <Route path='/AddProposal' 
                                render={()=>(<AddProposal
                                    drizzle={drizzle}
                                    drizzleState={drizzleState}/>)}
                                exact={true}/>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </LoadingComponent>
        );
    }
    }

    </DrizzleContext.Consumer>
    
);

export default AppRouter;