import styled from '@emotion/styled';
import { widths, colors } from '../styles/styles';


/** ContentSection styled component */
const ContentDiv: any = styled.div({
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: widths.textPageWidth,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.background,
});


/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */
const ContentSection = ({ children }: any) => {
    return <ContentDiv>{ children } </ContentDiv>;
};

export default ContentSection;


