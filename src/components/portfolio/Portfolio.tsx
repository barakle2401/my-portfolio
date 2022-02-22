import styled from 'styled-components';

const Portfolio = () => (
  <Wrapper id="portfolio">
    <span>Portfolio</span>
  </Wrapper>
);

export default Portfolio;

const Wrapper = styled.header.attrs({ className: 'portfolio' })`
  background-color: pink;
`;
