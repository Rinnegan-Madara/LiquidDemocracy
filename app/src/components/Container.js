import React from 'react';
import { DrizzleContext } from 'drizzle-react';

const Container = () =>(
    <DrizzleContext.Consumer>
      {drizzleContext =>{
        console.log(drizzleContext);
        const { initialized, drizzleState, drizzle } = drizzleContext;
        return(
  
          <div>
            <div id="heading">
              <h1>Whistleblower's Application</h1>
            </div> 
        </div>

      );
      }}
    </DrizzleContext.Consumer>
);

export default Container;