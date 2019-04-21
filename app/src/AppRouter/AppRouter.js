import React, { Fragment } from 'react';
import { DrizzleContext } from 'drizzle-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddMember from '../components/AddMember';

const AppRouter = (props) => (
    <DrizzleContext.Consumer>
    {drizzleContext => {
        {/* console.log(drizzleContext); */}
        const { initialized, drizzleState, drizzle } = drizzleContext;
        return (
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
        );
    }
    }

    </DrizzleContext.Consumer>
    
);

export default AppRouter;