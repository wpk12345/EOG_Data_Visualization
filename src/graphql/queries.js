/* eslint-disable */
import { gql } from '@apollo/client';

export const TIMESTAMP = gql`
  {
    heartBeat
  }
`;

export const GET_WEATHER_FOR_LOCATION = gql`
  {
    heartBeat
  }
`;

export const GET_METRICS = gql`
  {
    getMetrics
  }
`;

export const GET_LAST_KNOWN_MEASUREMENT = gql`
  query GetData($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      metric
      at
      value
      unit
    }
  }
`;

export const GET_MEASURMENTS = gql`
  query GetMoreData($measurements: MeasurementQuery) {
    getMeasurements(input: $measurements) {
      metric
      at
      value
      unit
    }
  }
`;

export const GET_MULTIPLE_MEASUREMENTS = gql`
  query GetMoreData($measurementQuery: [MeasurementQuery]) {
    getMultipleMeasurements(input: $measurementQuery) {
      metric
      at
      value
      unit
    }
  }
`;
