import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LeftContent from './leftContent';
import RightContent from './rightContent';
import ListForm from '../Common/ListForm';

// custom hooks
// 분리해서 사용하면 좋을 듯
const useFetch = (callback, url) => {
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
  }, []);

  return loading;
};

const List = ({ milestones, loading }) => {
  let milestoneList = <div>Loading...</div>;
  if (!loading) {
    milestoneList = milestones.map(milestone => (
      <Milestone key={milestone.id}>
        <LeftContent milestone={milestone} />
        <RightContent milestone={milestone} />
      </Milestone>
    ));
  }

  return <>{milestoneList}</>;
};

export default function MilestoneList(props) {
  const [status, setStatus] = useState(0);
  const [milestones, setMilestones] = useState({
    openTotalCount: 0,
    closeTotalCount: 0,
    milestoneArray: [],
  });

  const loading = useFetch(
    setMilestones,
    `http://localhost:3000/api/milestone/all?status=${status}`,
  );

  const clickOpen = e => {
    console.log('clicked open');
    if (status) {
      setStatus(0);
    }
  };

  const clickClose = e => {
    console.log('clicked close');
    if (!status) {
      setStatus(1);
    }
  };

  return (
    <ListForm
      content={

        <List milestones={milestones.milestoneArray} loading={loading} />

        <>
          <Milestone>
            <LeftContent />
            <RightContent />
          </Milestone>
          <Milestone>
            <LeftContent />
            <RightContent />
          </Milestone>
        </>

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
