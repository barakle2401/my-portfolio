import styled from 'styled-components';
import image from '@/assets/man.png';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import {
  MOBILE_TABLET_RESOLUTION,
  MIN_TABLET_RESOLUTION,
} from '@/styles/shared';

const Intro = () => {
  const typedEl = useRef(null);
  useEffect(() => {
    init(typedEl.current, {
      strings: [
        ' Full Stack web developer',
        'Frontend oriented',
        '2 Years of experience',
      ],
      showCursor: false,
    });
  }, []);
  return (
    <Wrapper id="intro">
      <div className="d-flex h-100">
        <div className="container main-content">
          {/* <h2>Hi There, I&apos;m</h2> */}
          <h1>Barak Levy.</h1>
          <h2>I build things for the web.</h2>
          <p className="smaller-text">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <h3>{/* <span ref={typedEl}></span> */}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.header.attrs({ className: 'intro' })`
  background-color: ${({ theme }) => theme.colors.primary.navy};
  .main-content {
    text-align: left;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    h1,
    h2,
    h3 {
      font-weight: 350;
    }
    h1 {
      font-size: clamp(40px, 8vw, 80px);
      color: ${({ theme }) => theme.colors.primary.lightGray};
      margin: 10px 0;
      font-weight: 600;
    }
    h2 {
      font-size: clamp(40px, 8vw, 80px);
      color: ${({ theme }) => theme.colors.primary.lightGrayText};
      margin: 10px 0;
      line-height: 0.9;
    }
    p {
      @media${MOBILE_TABLET_RESOLUTION} {
        max-width: 100vw;
      }
      max-width: 50vw;
      margin: 10px 0;
      line-height: 1.7;
    }
  }
`;
