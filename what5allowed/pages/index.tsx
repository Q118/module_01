import type { NextPage } from 'next'
import GlobalStyles from '../styles/styles';
// import Link from 'next/link'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Tracks from '../components/tracks';
import Header from '../components/header';
import Footer from '../components/footer';


const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});


const Home: NextPage = () => {
    return (
        <div>
            <ApolloProvider client={client}>
                <GlobalStyles />
                {/* <Header /> */}
                <Tracks />
                {/* <Footer /> */}
            </ApolloProvider>
        </div>
    )
}

export default Home
