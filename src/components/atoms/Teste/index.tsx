import React, {useEffect, useState} from 'react';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export default function Teste() {

    const [teste, setTeste] = useState<any>([]);

    const client = new ApolloClient({
        uri: process.env.REACT_APP_API_URL
    });

    useEffect(() => {
        client
        .query({
            query: gql`
                {
                    boxes {
                        edges {
                            node {
                                id
                                name
                                city
                                logo
                            }
                        }
                    }
                }
            `
        }).then(result => setTeste(result.data.boxes.edges));
      }, [teste]);


    return(
        <ApolloProvider client={client}>
        <div>
            <h2>My first Apollo app 🚀</h2>
            {teste.map((test:any) => (
                <div>
                    <p>{test.node.id}</p>
                </div>
            ))}
        </div>
      </ApolloProvider>
    );
}