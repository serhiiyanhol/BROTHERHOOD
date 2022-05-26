import React from 'react';
import { Asset } from 'contentful';
import Row from '../Wrappers/Row';
import WrapperLight from '../Wrappers/Light';
import ActivityElement from './ActivityElement';
import Subtitle from '../Wrappers/Subtitle';

export default function Activity({
  title,
  activitySubtitle,
  activityList,
}: {
  title: React.ReactNode,
  activitySubtitle: string,
  activityList: Asset[],
}) {
  // let activities;
  // if (activityList && activityList?.length <= 5) {
  //
  // }
  return (
    <>
      {activityList?.length && (
        <WrapperLight id="activity">
          {title}
          <Subtitle>
            {activitySubtitle && (<h4>{activitySubtitle}</h4>)}
          </Subtitle>
          <Row>
            <ActivityElement item={activityList[0]} />
            <ActivityElement item={activityList[1]} />
            <ActivityElement item={activityList[2]} />
            <ActivityElement item={activityList[3]} />
            <ActivityElement item={activityList[4]} />
          </Row>
          <Row>
            <ActivityElement item={activityList[5]} />
            <ActivityElement item={activityList[6]} />
            <ActivityElement item={activityList[7]} />
            <ActivityElement item={activityList[8]} />
            <ActivityElement item={activityList[9]} />
          </Row>
        </WrapperLight>
      )}
    </>
  );
}
