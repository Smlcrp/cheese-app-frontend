import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cheese from '../pages/Cheese';
import Show from '../pages/Show';

function Main(props) {
    const [cheese, setCheese] = useState(null);

    const URL = 'https://cheesey-app.herokuapp.com/cheese';

    const getCheese = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    };

    const createCheese = async (cheese) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cheese),
        });
        getCheese();
    };

    useEffect(() => getCheese(), []);

    return(
        <main>
            <Switch>
                <Route exact path='/'>
                    <Cheese cheese={cheese} createCheese={createCheese}/>
                </Route>
                <Route path='/cheese/:id' render={(rp) => (<Show {...rp}/>)}/>
            </Switch>
        </main>
    );
}

export default Main;