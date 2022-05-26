import React from 'react';
import WrapperDark from '../Wrappers/Dark';
import { Asset } from 'contentful';
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
          maxHeight: '990px',
          height: '66vw',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(https:${teamBackground.fields.file.url})`,
          backgroundSize: '80%',
          backgroundPosition: 'center',
        }}
      >
        <div className="padding-tb-2">
          {title}
        </div>
        <div className="padding-3">
          <Row>
            <TeamMate item={teamPhotos[0]} />
            <TeamMate item={teamPhotos[1]} />
            <TeamMate item={teamPhotos[2]} />
            <TeamMate item={teamPhotos[3]} />
          </Row>
          <div className="pt-5" />
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
