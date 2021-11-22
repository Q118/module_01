import styled from '@emotion/styled';
import { colors, widths } from '../styles/styles';
import useWindowDimensions from './utils/useWindowDimensions';
import ContentSection from './content-section';
import ReactPlayer from 'react-player/youtube';
import ModulesNav from './modules-navigation';
import MarkDown from './md-content';


/**
 * Module Detail renders content of a given module:
 * Video player, modules navigation and markdown content
 */
const ModuleDetail = ({ track, module }: any) => {
  const { videoUrl, title, content }: any = module;
  const { width }: any   = useWindowDimensions();

  return (
    <div>
      <TopSection>
        <TopContainer>
            {width}
          <PlayerContainer>
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </PlayerContainer>
          <ModulesNav track={track} module={module}></ModulesNav>
        </TopContainer>
      </TopSection>
      <ContentSection>
        <ModuleTitle>{title}</ModuleTitle>
        <MarkDown content={content} />
      </ContentSection>
    </div>
  );
};

export default ModuleDetail;

/** Module Detail styled components */
const TopSection = styled.div({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colors.black.base,
  padding: 20,
  borderBottom: `solid 1px ${colors.pink.base}`,
});

const TopContainer = styled.div(({ totalWidth }:any) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  width: '100%',
  maxWidth: widths.largePageWidth,
  // 60 below removes 3 * 20 horizontal paddings (sides and inner between player and list)
  height: ((totalWidth - 60) * (2 / 3)) / (16 / 9),
  maxHeight: (widths.largePageWidth * (2 / 3)) / (16 / 9),
}));

const PlayerContainer = styled.div({
  width: '66%',
});

const ModuleTitle = styled.h1({
  marginTop: 10,
  marginBottom: 30,
  paddingBottom: 10,
  color: colors.black.lighter,
  borderBottom: `solid 1px ${colors.pink.base}`,
});
