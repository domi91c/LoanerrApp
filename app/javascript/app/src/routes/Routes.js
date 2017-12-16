//Import Dependencies Here
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import InboxPage from '../pages/InboxPage';
import AccountPage from '../pages/AccountPage';
import RegisterPage from '../pages/RegisterPage';
import MyApplicationPage from '../pages/MyApplicationPage';
import MyTeamPage from '../pages/MyTeamPage';

const Routes = () => (
    <Switch>
        <Route exact path = '/' component = { LoginPage }/>
        <Route path = '/login' component = { LoginPage }/>
        <Route path = '/register' component = { RegisterPage }/>
        <Route path = '/home' component = { HomePage }/>
        <Route path = '/inbox' component = { InboxPage }/>
        <Route path = '/account' component = { AccountPage }/>
        <Route path = '/myapplication' component = { MyApplicationPage }/>
        <Route path = '/myteam' component = { MyTeamPage }/>
    </Switch>
)

export default Routes;
