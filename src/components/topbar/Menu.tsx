import styled from 'styled-components';

type BurgerProps = {
  open: boolean;
  setOpen: Function;
};
const Menu = ({ open, setOpen }: BurgerProps) => (
  <StyledMenu open={open} onClick={() => setOpen(!open)}>
    <div className="list-wrapper">
      <a href="#intro">HOME</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#works">Works</a>
      <a href="#contact">Contact</a>
    </div>
  </StyledMenu>
);
export default Menu;
const StyledMenu = styled.nav`
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.navy};
  height: 100vh;
  text-align: left;

  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.colors.primary.dark}) {
    width: 100%;
  }
  .list-wrapper {
    border-right: solid ${({ theme }) => theme.colors.primary.green};
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.primary.light};
    text-decoration: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.green};
    }
  }
`;
