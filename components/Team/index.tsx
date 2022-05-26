import React from 'react';
import { Asset } from 'contentful';
import WrapperDark from '../Wrappers/Dark';
import Row from '../Wrappers/Row';
import TeamMate from './TeamMate';

export default function Team({
  title,
  teamBackground,
  teamPhotos,
}: {
  title: React.ReactNode,
  teamBackground: Asset,
  teamPhotos: Asset[],
}) {
  return (
    <WrapperDark>
      <div
        id="team"
        style={{
          backgroundImage: `url(https:${teamBackground.fields.file.url})`,
        }}
      >
        {title}
        <div className="padding-3">
          <Row>
            <TeamMate item={teamPhotos[0]} />
            <TeamMate item={teamPhotos[1]} />
            <TeamMate item={teamPhotos[2]} />
            <TeamMate item={teamPhotos[3]} />
          </Row>
          <div className="padding-t-3" />
          <Row>
            <TeamMate item={teamPhotos[4]} />
            <TeamMate item={teamPhotos[5]} />
            <TeamMate item={teamPhotos[6]} />
            <TeamMate item={teamPhotos[7]} />
            <TeamMate item={teamPhotos[8]} />
          </Row>
        </div>
      </div>
    </WrapperDark>
  );
}
