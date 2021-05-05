import './App.css';

import Users from "./component/users/users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Posts from "./component/posts/posts";



function App() {

    return (
        <div>

            <Router>
                <Link to={'/users'}>Users</Link>
                <h1></h1>
                <Link to={'/posts'}>posts</Link>
                <Switch>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
