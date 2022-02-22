import styled from 'styled-components';
import WorksList from '@/components/works/WorksList';

const Works = () => (
  <Wrapper id="works">
    <div className="d-flex h-100">
      <div className="container main-content">
        <h1>
          <HighlightGreenSpan>02.</HighlightGreenSpan> Where I’ve Worked
        </h1>
        <WorksList />
      </div>
    </div>
  </Wrapper>
);

export default Works;

const Wrapper = styled.header.attrs({ className: 'works' })`
  background-color: ${({ theme }) => theme.colors.primary.navy};
  .main-content {
    text-align: center;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
`;
const HighlightGreenSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary.green};
`;
