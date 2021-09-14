/* eslint-disable */
import React, { useEffect, useState } from 'react';
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

  const [metric, setMetric] = useState('oilTemp');
  const [amt, SetAmt] = useState(400);
  const [xName, setXName] = useState(['', 500, 1000]);
  const [yName, setYName] = useState(2500);

  const handleChange = (event) => {
    const { value } = event.target;
    setMetric(value);
    setXName(getLastKnownMeasurement.data.getLastKnownMeasurement.value);
  };

  //variables for queries
  const metricName = metric;

  const getTimeStamp = useQuery(TIMESTAMP);
  const getMetrics = useQuery(GET_METRICS);
  const getLastKnownMeasurement = useQuery(GET_LAST_KNOWN_MEASUREMENT, {
    variables: { metricName },
  });

  //get all queries first
  console.log(getTimeStamp.data);
  console.log(getMetrics.data);
  console.log(getLastKnownMeasurement.data);
  console.log(metric);

  const data = [{ name: metric, xAxisName: xName, yAxisName: yName, amt: amt }];

  return (
    <div>
      {/* <h1>
        metric {getTimeStamp.data.heartBeat} {getMetrics.data.getMetrics[0]}{' '}
        {getLastKnownMeasurement.data.getLastKnownMeasurement.value}
      </h1> */}
      <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
          <InputLabel>Select Metric</InputLabel>
          <Select value={metric} id="metricSelector" name="metric" onChange={handleChange}>
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
            <Line type="monotone" dataKey="xAxisName" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="xAxisName" />
            <YAxis dataKey="yAxisName" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};
