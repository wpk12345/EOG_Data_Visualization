/* eslint-disable */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, Select, MenuItem, Paper } from '@material-ui/core';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import {
  TIMESTAMP,
  GET_WEATHER_FOR_LOCATION,
  GET_METRICS,
  GET_LAST_KNOWN_MEASUREMENT,
  GET_MEASURMENTS,
  GET_MULTIPLE_MEASUREMENTS,
} from '../graphql/queries';
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

  const getTimeStamp = useQuery(TIMESTAMP);
  const getMetrics = useQuery(GET_METRICS);
  const getLastKnownMeasurement = useQuery(GET_LAST_KNOWN_MEASUREMENT);

  //get all queries first
  console.log(getTimeStamp.data);
  console.log(getMetrics.data);
  console.log(getLastKnownMeasurement.data);
  console.log(state.metric);

  //switch statement for metric selected

  const data = [{ name: 'Date Stamp', uv: 1800, pv: 2400, amt: 1200 }];

  return (
    <div>
      <h1>
        Hello {getTimeStamp.data.heartBeat} {getMetrics.data.getMetrics[0]}{' '}
        {getLastKnownMeasurement.data.getLastKnownMeasurement.value}
      </h1>
      <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
          <InputLabel>Select Metric</InputLabel>
          <Select value={state.metric} id="metricSelector" name="metric" onChange={handleChange}>
            <MenuItem value="casingPressure">Casing Pressure</MenuItem>
            <MenuItem value="injValveOpen">Inj Valve Open</MenuItem>
            <MenuItem value="tubingPressure">Tubing Pressure</MenuItem>
            <MenuItem value="flareTemp">Flare Temp</MenuItem>
            <MenuItem value="oilTemp">Oil Temp</MenuItem>
            <MenuItem value="waterTemp">Water Temp</MenuItem>
          </Select>
        </FormControl>
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
