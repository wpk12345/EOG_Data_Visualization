/* eslint-disable */
import { gql, useQuery } from '@apollo/client';
import { TIMESTAMP } from '../graphql/queries';

console.log(TIMESTAMP);

function Test() {
    const { loading, error, data } = useQuery(TIMESTAMP);
    console.log(data);

    if(loading) return <p>Loading....</p>;
    if(error) return <p>Error</p>;
    
    return (
        <div>
            <p>Test</p>
        </div>
    );

    }

    export default Test;