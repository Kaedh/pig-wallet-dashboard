import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/Transactions/:type" exact component={Transactions} />
            </Switch>
        </Layout>
    )

};

export default AppRoutes;