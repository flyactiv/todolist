import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import CreateRecipePage from './components/CreateRecipes';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp';
import HomePage from './components/Home';


const App=()=>{

    
    
    return (
        <Router>
            <div className="">
                <Navbar/>
                <Switch>
                    <Route path="/signup">
                        <SignUpPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/create_recipe">
                        <CreateRecipePage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}




ReactDOM.render(<App/>, document.getElementById('root'));
