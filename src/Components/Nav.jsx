import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  RiHome7Line,
  RiHome7Fill,
  RiSearch2Line,
  RiMovieLine,
  RiMovieFill,
  RiHeartLine,
  RiHeartFill,
  RiUser2Line,
  RiUser2Fill,
} from 'react-icons/ri';

const transition = css`
  transition: 0.45s ease;
`;

const Menu = styled.div`
  width: 240px;
  height: 40px;
  padding: 0 1rem;
  justify-content: space-between;
  background: #111;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: ${(p) => (p.active ? '#4fc08d' : '#f5f5f5')};
  ${transition}
`;

const navs = [
  { active: <RiHome7Fill />, notactive: <RiHome7Line /> },
  { active: <RiSearch2Line />, notactive: <RiSearch2Line /> },
  { active: <RiMovieFill />, notactive: <RiMovieLine /> },
  { active: <RiHeartFill />, notactive: <RiHeartLine /> },
  { active: <RiUser2Fill />, notactive: <RiUser2Line /> },
];
const Navs = ({ active, setActive }) => {
  return (
    <>
      {navs.map((nav, index) => (
        <Icon active={active === index} onClick={() => setActive(index)}>
          {active === index ? nav.active : nav.notactive}
        </Icon>
      ))}
    </>
  );
};

const Nav = () => {
  const [active, setactive] = useState(0);
  return (
    <Menu>
      <Navs active={active} setActive={setactive} />
    </Menu>
  );
};

export default Nav;
