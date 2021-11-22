import React, { JSXElementConstructor } from 'react';
import { Header, Footer } from '.';
import styled from '@emotion/styled';
import { widths, unit } from '../styles/styles';

/** Layout styled components */
const PageContainer = styled.div((): any => ({
    display: 'flex',
    //justifyContent: props.grid ? 'center' : 'top',
    //flexDirection: props.grid ? 'row' : 'column',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexGrow: 1,
    //maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
    width: '100%',
    //padding: props.fullWidth ? 0 : unit * 2,
    paddingBottom: unit * 5,
}));

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }: any) => {
    return (
        <>
            <Header />
            <PageContainer fullWidth={fullWidth} grid={grid}>
                {fullWidth}
                {children}
                {grid}
            </PageContainer>
            <Footer />
        </>
    );
};

export default Layout;

