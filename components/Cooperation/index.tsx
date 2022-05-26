import React from 'react';
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Row from '../Wrappers/Row';
import WrapperLight from '../Wrappers/Light';
import WrapperDark from '../Wrappers/Dark';
import Content from '../Wrappers/Content';

export default function Cooperation({
  title,
  cooperationContent,
  cooperationPartnersTitle,
  cooperationPartnersList,
}: {
  title: React.ReactNode,
  cooperationContent: Document,
  cooperationPartnersTitle: string,
  cooperationPartnersList: string[],
}) {
  return (
    <WrapperLight id="cooperation">
      {title}
      <Content>
        <div className="padding-3">
          {cooperationContent && documentToReactComponents(cooperationContent)}
        </div>
      </Content>
      <WrapperDark>
        <div className="padding-3">
          <div
            className="pb-3"
            style={{
              fontSize: '2vw',
              lineHeight: '2.5vw',
              letterSpacing: '0em',
              fontWeight: 800,
            }}
          >
            {cooperationPartnersTitle && (<span>{cooperationPartnersTitle}</span>)}
          </div>
          <Row>
            <div
              className="col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.5vw',
                lineHeight: '2vw',
                letterSpacing: '0em',
              }}
            >
              <span>{cooperationPartnersList[0]}</span>
              <span>{cooperationPartnersList[1]}</span>
              <span>{cooperationPartnersList[2]}</span>
              <span>{cooperationPartnersList[3]}</span>
            </div>
            <div
              className="col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.5vw',
                lineHeight: '2vw',
                letterSpacing: '0em',
              }}
            >
              <span>{cooperationPartnersList[4]}</span>
              <span>{cooperationPartnersList[5]}</span>
              <span>{cooperationPartnersList[6]}</span>
              <span>{cooperationPartnersList[7]}</span>
              <span>{cooperationPartnersList[8]}</span>
            </div>
            <div
              className="col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.5vw',
                lineHeight: '2vw',
                letterSpacing: '0em',
              }}
            >
              <span>{cooperationPartnersList[9]}</span>
              <span>{cooperationPartnersList[10]}</span>
              <span>{cooperationPartnersList[11]}</span>
              <span>{cooperationPartnersList[12]}</span>
            </div>
          </Row>
        </div>
      </WrapperDark>
    </WrapperLight>
  );
};
