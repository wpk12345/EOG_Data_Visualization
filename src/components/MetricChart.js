/* eslint-disable */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, Select, MenuItem, Paper } from '@material-ui/core';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: '#d3d3d3',
    color: '#FFFFFF',
    margin: '3%',
  },
  formControl: {
    margin: '1%',
    minWidth: 120,
  },
}));

export default () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    metric: '',
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setState({
      metric: value,
    });
  };

  const data = [{ name: 'Date Stamp', uv: 1800, pv: 2400, amt: 2400 }];

  return (
    <div>
      <Paper className={classes.paper}>
        <ResponsiveContainer height={300}>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis dataKey="pv" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};
