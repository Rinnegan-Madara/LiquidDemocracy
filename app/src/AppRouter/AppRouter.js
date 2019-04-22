import React, { Fragment } from 'react';
import { DrizzleContext } from 'drizzle-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddMember from '../components/AddMember';

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
                            <Route path='/addMember' 
                                render={()=>(<AddMember drizzle={drizzle} drizzleState={drizzleState}/>)} 
                                exact={true} />
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