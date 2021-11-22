import type { NextPage } from 'next'
import GlobalStyles from '../styles/styles';
// import Link from 'next/link'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Tracks from '../components/tracks';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});


const Home: NextPage = () => {
    return (
        <div>
            <ApolloProvider client={client}>
                <GlobalStyles />
                <Tracks />
            </ApolloProvider>
        </div>
    )
}

export default Home
