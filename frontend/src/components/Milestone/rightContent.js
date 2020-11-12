import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function RightContent({ milestone,  milestones, setMilestones, id, milestoneService }) {
  const history = useHistory();
  
  const onClickEdit = () => {
    history.push({
       pathname: '/milestone/edit',
       state : {id : id},
  });
  };

  const getPercent = (open, close) => {
    if (open === 0) return 0;
    return (close / (open + close)) * 100;
  };

  const deleteMilestone = () => {
    milestoneService.deleteMilestone(`http://localhost:3000/api/milestone?id=${id}`);
  };

  const closeMilestone = () => {
    milestoneService.updateMilestone('http://localhost:3000/api/milestone', {
      id: id,
      milestone_name: milestone.milestone_name,
      milestone_description: milestone.milestone_description,
      end_date: milestone.end_date,
      status: 1,
    });
  };

  const openMilestone = () => {
    milestoneService.updateMilestone('http://localhost:3000/api/milestone', {
      id: id,
      milestone_name: milestone.milestone_name,
      milestone_description: milestone.milestone_description,
      end_date: milestone.end_date,
      status: 0,
    });
  };

  const onClickDelete = async () => {
    let newMilestone = []
    let _milestones = {...milestones, };

    if(milestone.status === 0) _milestones.openTotalCount -= 1; 
    else  _milestones.closeTotalCount -= 1;

    const newmilestoneArray = _milestones.milestoneArray.filter(milestone=>milestone.id !== id);
    setMilestones({... _milestones, milestoneArray:newmilestoneArray});

    deleteMilestone();
  }

  const changeStatus = async () => {
    let _milestones = {...milestones};

    if(milestone.status) {
      _milestones.closeTotalCount -= 1; 
      _milestones.openTotalCount += 1;
      const newmilestoneArray = _milestones.milestoneArray.filter(milestone=>milestone.id !== id);
      setMilestones({... _milestones, milestoneArray:newmilestoneArray});
      openMilestone();
    }
    else {
      _milestones.closeTotalCount += 1; 
      _milestones.openTotalCount -= 1;
      const newmilestoneArray = _milestones.milestoneArray.filter(milestone=>milestone.id !== id);
      setMilestones({... _milestones, milestoneArray:newmilestoneArray});
      closeMilestone();
    }
  }

  return (
    <ContentRight>
      <GaugeBar>
        <PercentGauge percent={getPercent(milestone.open_count, milestone.close_count)}/>
      </GaugeBar>
      <Info>
        <Percent>
          {`${getPercent(milestone.open_count, milestone.close_count)}%`}
        </Percent>
        <span>complete</span>
        <OpenCount>{milestone.open_count}</OpenCount>
        <span>open</span>
        <ClosedCount>{milestone.close_count}</ClosedCount>
        <span>closed</span>
      </Info>

      <Buttons>
        <BlueTextButton onClick={onClickEdit}>Edit</BlueTextButton>
  <BlueTextButton onClick={changeStatus}>{
     milestone.status === 0 ? 'Close' : 'Open'
  }</BlueTextButton>
        <RedTextButton onClick={onClickDelete}>Delete</RedTextButton>
      </Buttons>
    </ContentRight>
  );
}

const ContentRight = styled.span`
  width: 40%;
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

const GaugeBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PercentGauge = styled.div`
  ${({percent}) => {
    return `width: ${percent}%;` 
  }}
  height: 10px;
  border-radius: 50px;
  background-color: green;
`;

const Info = styled.div`
  margin-top: 1em;
  display: flex;
`;

const BlueTextButton = styled.a`
  color: blue;
  margin-right: 1em;
  text-decoration: none;
  cursor: pointer;
`;

const RedTextButton = styled.a`
  color: red;
  text-decoration: none;
  cursor: pointer;
`;

const Buttons = styled.div`
  margin-top: 1em;
`;

const Percent = styled.span`
  font-weight: bold;
  margin-right: 0.5em;
`;

const OpenCount = styled.span`
  margin: 0 0.5em;
  font-weight: bold;
`;
const ClosedCount = styled.span`
  margin: 0 0.5em;
  font-weight: bold;
`;
