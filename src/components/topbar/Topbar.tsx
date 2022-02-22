import styled from 'styled-components';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import GreenOutlinedButton from '@/components/common/GreenOutlinedButton';
import Menu from '@/components/topbar/Menu';
import Burger from '@/components/topbar/Burger';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '@/hooks/hooks.js';
import theme from 'styles/theme';
import { MOBILE_TABLET_RESOLUTION } from '@/styles/shared';

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const handleClick = () => {
    console.log('hi');
  };
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Wrapper>
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>

      <div className="items-wrapper">
        <div className="item-container">
          <PhoneIcon
            sx={{
              mr: 1,
              color: theme.colors.primary.green,
            }}
          />
          <span>052 - 6950610</span>
        </div>
        <div className="item-container">
          <MailIcon
            sx={{
              mr: 1,
              color: theme.colors.primary.green,
            }}
          />
          <span>barakk.levy@gmail.com</span>
        </div>
        <GreenOutlinedButton onClick={handleClick}>Resume</GreenOutlinedButton>
      </div>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.header.attrs({ className: 'topbar' })`
  background: ${({ theme }) => theme.colors.primary.navy};
  padding: 3rem;
  width: 100%;
  height: 55px;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  font-size: 0.9rem;
  z-index: 2;
  .items-wrapper {
    @media${MOBILE_TABLET_RESOLUTION} {
      display: none;
    }

    display: flex;

    justify-content: end;
    width: 100%;
    flex-wrap: wrap;
    .item-container {
      margin-right: 3rem;
      display: flex;
      align-items: center;
    }
  }
`;
// const LogoWrapper = styled.div`
//   color: ${({ theme }) => theme.colors.primary.light};
//   font-family: monospace;
// `;
