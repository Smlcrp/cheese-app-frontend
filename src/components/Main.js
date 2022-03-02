import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cheese from '../pages/Cheese';
import Show from '../pages/Show';

function Main(props) {
    return(
        <main>
            <Switch>
                <Route exact path='/'>
                    <Cheese/>
                </Route>
                <Route
                    path='/cheese/:id'
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;