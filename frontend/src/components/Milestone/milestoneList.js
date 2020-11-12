import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LeftContent from './leftContent';
import RightContent from './rightContent';
import ListForm from '../Common/ListForm';

// custom hooks
// 분리해서 사용하면 좋을 듯
const useFetch = (state, callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url, { method: 'GET' });
    const initialData = await response.json();
    callback(initialData.milestonesInfo);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, [state]);

  return loading;
};

const List = ({ milestones, setMilestones, loading, milestoneService }) => {
  let milestoneList = <div>Loading...</div>;
  if (!loading) {
    milestoneList = milestones.milestoneArray.map(milestone => (
      <Milestone key={milestone.id}>
        <LeftContent milestone={milestone} />
        <RightContent
          milestone={milestone}
          milestones={milestones}
          setMilestones={setMilestones}
          id={milestone.id}
          milestoneService={milestoneService}
        />
      </Milestone>
    ));
  }

  return <>{milestoneList}</>;
};

export default function MilestoneList({ milestoneService }) {
  const [status, setStatus] = useState(0);
  const [milestones, setMilestones] = useState({
    openTotalCount: 0,
    closeTotalCount: 0,
    milestoneArray: [],
  });

  const loading = useFetch(
    status,
    setMilestones,
    `http://localhost:3000/api/milestone/all?status=${status}`,
    'GET',
  );

  const clickOpen = e => {
    if (status) {
      setStatus(0);
    }
  };

  const clickClose = e => {
    if (!status) {
      setStatus(1);
    }
  };

  return (
    <ListForm
      content={
        <List
          milestones={milestones}
          setMilestones={setMilestones}
          loading={loading}
          milestoneService={milestoneService}
        />
      }
      type="milestone"
      openTotalCount={milestones.openTotalCount}
      closeTotalCount={milestones.closeTotalCount}
      clickOpen={clickOpen}
      clickClose={clickClose}
      status={status}
    />
  );
}

const Milestone = styled.div`
  position: relative;
  width: 100%;
  padding: 1em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
