/* eslint-disable */
import { gql, useQuery } from '@apollo/client';
import {
    TIMESTAMP,
    GET_METRICS,
} from '../graphql/queries';

const Test = () => {
    // const timeStamp = useQuery(TIMESTAMP);
    // const metrics = useQuery(GET_METRICS);

    // console.log(timeStamp.data);
    // console.log(metrics.data);

    return (
        <div>
            {/* <h3>Time Stamp: {timeStamp.data.heartBeat}</h3>
            <h3>Metrics: {metrics.data.getMetrics[0]} </h3> */}
        </div>
    );

    }

    export default Test;