import React from 'react';
import styled from 'styled-components';
import { MilestoneIcon, CheckIcon } from '@primer/octicons-react';
import LeftContent from './leftContent';
import RightContent from './rightContent';

export default function MilestoneList(props) {
  return (
    <Wrapper>
      <Header>
        <Open>
          <MilestoneIcon size={20} />
          <span className="open__count">2</span>
          <span className="open__text">Open</span>
        </Open>
        <Closed>
          <CheckIcon size={20} />
          <span className="closed__count">0</span>
          <span className="closed__text">Closed</span>
        </Closed>
      </Header>
      <List>
        <Milestone>
          <LeftContent />
          <RightContent />
        </Milestone>
        <Milestone>
          <LeftContent />
          <RightContent />
        </Milestone>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 25em;
  margin: auto;
`;

const Header = styled.div`
  width: 100%;
  padding: 0.5em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Open = styled.span``;
const Closed = styled.span`
  margin-left: 1em;
`;

const List = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Milestone = styled.div`
  position: relative;
  width: 100%;
  padding: 1em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
