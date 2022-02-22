import styled from 'styled-components';
import Topbar from '@/components/topbar/Topbar';
import Intro from '@/components/intro/Intro';
import Contact from '@/components/contact/Contact';
import Portfolio from '@/components/portfolio/Portfolio';
import Works from '@/components/works/Works';

const Home = () => (
  <AppContainer>
    <Topbar />
    <SectionWrapper>
      <Intro />
      <Works />
      <Portfolio />
      <Contact />
    </SectionWrapper>
  </AppContainer>
);

export default Home;

const AppContainer = styled.main`
  height: 100vh;
`;

const SectionWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  top: 90px;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    width: 100vw;
    height: calc(100vh - 90px);
    scroll-snap-align: start;
  }
`;
