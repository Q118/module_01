import React from 'react';
// import styled from '@emotion/styled';
// import { colors } from '../styles';
import ReactMarkdown from 'react-markdown';



/** Markdown styled components */
// const StyledMarkdown = styled(ReactMarkdown)({
//     // let color: colors.grey.darker,
//     h1: {
//         fontSize: '1.7em',
//     },
//     h2: {
//         fontSize: '1.4em',
//     },
//     h3: {
//         fontSize: '1.2em',
//     },
//     a: {
//         color: colors.pink.base,
//     },
//     pre: {
//         padding: 20,
//         borderRadius: 4,
//         border: `solid 1px ${colors.silver.dark}`,
//         backgroundColor: colors.silver.base,
//         code: {
//             fontSize: '0.9em',
//         },
//     },
// });

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
const MarkDown = ({ content }: any) => {
    return (
        <div>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>;
        </div>
    )
};

export default MarkDown;