import styled from 'styled-components';

const WorksList = () => {
  const worksItems = ['AK-LAUNCH', 'ALLOT'];
  const TabsList = worksItems.map((item) => (
    <Tab type="button" key={item}>
      {item}
    </Tab>
  ));
  return <div className="d-flex">{TabsList}</div>;
};

export default WorksList;

const Wrapper = styled.header.attrs({ className: 'worksList' })``;
const Tab = styled.button`
  background-color: red;
`;
