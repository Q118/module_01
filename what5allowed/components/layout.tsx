import React, { JSXElementConstructor } from 'react';
import { Header, Footer } from '.';
import styled from '@emotion/styled';
import { widths, unit } from '../styles/styles';

/** Layout styled components */
const PageContainer = styled.div((): any => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: `${widths.regularPageWidth}px`,
    width: '100%',
    padding: 0,
    paddingBottom: unit * 5,
}));

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */



const Layout = ({children}: any) => (
    <div>
        <Header />
        <PageContainer>
            {children}
        </PageContainer>
        <Footer />
    </div>
);


export default Layout;

