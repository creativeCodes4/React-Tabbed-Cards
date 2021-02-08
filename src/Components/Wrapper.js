// Importing Packages...

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

// Declaring Transition...
const transition = css`
  transition: transform 0.45s;
`;

// The Card Main Wrapper...
const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 280px;
  background: white;
  border-radius: 1.5rem;
`;

// Header Row...
const Row = styled.div`
  display: flex;
  position: relative;
`;

// Header Buttons...
const Button = styled.button`
  padding: 1.3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: #4fc08d;
  outline: none;
  border: none;
  font-weight: ${(p) => (p.active ? 'bold' : '400')};
  border-bottom: 3px solid
    ${(p) => (p.active ? rgba('#4fc08d', 0.95) : rgba('#4fc08d', 0.15))};
  cursor: pointer;
  font-size: 1rem;
  background: ${(p) => (p.active ? rgba('#4fc08d', 0.05) : 'transparent')};
  ${transition};
  &:hover {
    background-color: ${rgba('#4fc08d', 0.05)};
    color: #4fc08d;
  }
`;

// Card Content Holder...

const Content = styled.div`
  position: absolute;
  height: 100%;
  padding: 0.6rem 0rem;
  display: flex;
  transform: translateX(
    ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}`)}px
  );
  ${transition};
`;

// Single Tab

const Tab = styled.div`
  width: 300px;
`;

// Data Holder [Image,Name]...

const Data = styled.div`
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  margin: 0.5rem 0rem;
  cursor: pointer;
  border-bottom: 1px dashed #f1f1f1;
  img {
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    margin: 0rem 0rem 0rem 1rem;
  }
`;

// Available Tabs...

const tabs = ['Front End', 'Back End'];

// Tab Component...

const Tabs = ({ active, setActive }) => {
  return (
    <Row>
      {tabs.map((tab, index) => (
        <Button active={active === index} onClick={() => setActive(index)}>
          {tab}
        </Button>
      ))}
    </Row>
  );
};

// Wrapper Component (Main component to be exported)...

const Wrapper = () => {
  const [active, setActive] = useState(0);

  return (
    <Card>
      <Tabs active={active} setActive={setActive} />
      <Content active={active}>
        {tabs.map((tab) => (
          <Tab>
            {tab === 'Back End' ? (
              <>
                <Data>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh9Y7tcmwEr_od64uK2G5DokOr_yxia1xVw&usqp=CAU"
                    alt="Avatar"
                  />
                  <p>Jane Doe</p>
                </Data>
                <Data>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVVBhM9gHkGMTkF9JyPFxYQqFXQqMlU86Gg&usqp=CAU"
                    alt="Avatar"
                  />
                  <p>Edward Smith</p>
                </Data>
                <Data>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TuafN669AzN317JKdHV3f_ZnYgW2YbbroQ&usqp=CAU"
                    alt="Avatar"
                  />
                  <p>Peter Parker</p>
                </Data>
              </>
            ) : (
              <>
                <Data>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU"
                    alt="Avatar"
                  />
                  <p>Mary Jane</p>
                </Data>
                <Data>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqEbCObktHcZ06KBa2g4UYutgJfAXPEW2Hw&usqp=CAU"
                    alt="Avatar"
                  />
                  <p>David James</p>
                </Data>
              </>
            )}
          </Tab>
        ))}
      </Content>
    </Card>
  );
};

export default Wrapper;
