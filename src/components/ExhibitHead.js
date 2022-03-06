import React from 'react';
import styled from 'styled-components';

const ExhibitHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function ExhibitHead() {
  return (
    <ExhibitHeadBlock>
      <select className="tasks-left">
        <option>서울</option>
        <option>경기</option>
      </select>
      <select className="tasks-left">
        <option>미술</option>
        <option>연극</option>
      </select>
      <select className="tasks-left">
        <option> ~ 3개월 이내</option>
        <option> ~ 6개월 이내</option>
        <option> ~ 12개월 이내</option>
      </select>
    </ExhibitHeadBlock>
  );
}

export default ExhibitHead;
