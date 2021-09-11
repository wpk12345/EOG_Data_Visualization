/* eslint-disable */
import React from 'react';
import { client } from "./ApolloClient/client";
import {
  ApolloProvider,
} from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import MetricChart from './components/MetricChart';
import Wrapper from './components/Wrapper';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        <MetricChart />
        <ToastContainer />
      </Wrapper>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
