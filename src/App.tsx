import React from 'react';

import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

const App :React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <Dashboard />
            </Layout>
        </ThemeProvider>
    )
};

export default App;