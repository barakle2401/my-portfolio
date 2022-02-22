import styled from 'styled-components';

const Contact = () => (
    <Wrapper>
      <span>Contacts</span>
    </Wrapper>
  );

export default Contact;


const Wrapper = styled.div.attrs({ className: 'contact' })`
background-color: purple;
`;
