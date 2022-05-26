import React from 'react';
import { Document } from "@contentful/rich-text-types";
import WrapperLight from '../Wrappers/Light';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import WrapperDark from '../Wrappers/Dark';
import Content from '../Wrappers/Content';

export default ({
  title,
  financingContent,
  financingContent2,
}: {
  title: React.ReactNode,
  financingContent: Document,
  financingContent2: Document,
}) => {
  return (
    <WrapperLight id="financing">
      {title}
      <Content>
        <div className="padding-3">
          {financingContent && documentToReactComponents(financingContent)}
        </div>
        <WrapperDark>
          <div className="padding-3">
            {financingContent2 && documentToReactComponents(financingContent2)}
          </div>
        </WrapperDark>
      </Content>
    </WrapperLight>
  );
};
