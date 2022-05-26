import React from 'react';
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import WrapperLight from '../Wrappers/Light';
import WrapperDark from '../Wrappers/Dark';
import Content from '../Wrappers/Content';

export default ({
  title,
  aboutUsContent,
  aboutUsContent2,
}: {
  title: React.ReactNode,
  aboutUsContent: Document,
  aboutUsContent2: Document,
}) => (
  <WrapperLight id="aboutUs">
    {title}
    <Content>
      <div className="padding-3">
        {aboutUsContent && documentToReactComponents(aboutUsContent)}
      </div>
      <WrapperDark>
        <div className="padding-3">
          {aboutUsContent2 && documentToReactComponents(aboutUsContent2)}
        </div>
      </WrapperDark>
    </Content>
  </WrapperLight>
);
