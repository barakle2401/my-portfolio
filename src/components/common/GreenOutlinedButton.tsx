import styled from 'styled-components';

const GreenOutlinedButton = styled.button.attrs({
  className: 'green-outlined-button',
  type: 'button',
})`
  color: ${({ theme }) => theme.colors.primary.green};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary.green};
  background: transparent;
  padding: 0.75rem 1rem;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  line-height: 1;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

export default GreenOutlinedButton;
