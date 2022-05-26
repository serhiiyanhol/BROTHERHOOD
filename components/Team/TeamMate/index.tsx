import { Asset } from 'contentful';
import React from 'react';

export default function TeamMate({ item }: { item: Asset }): React.ReactElement {
  return (
    <div className="col padding-1">
      <img
        style={{
          maxWidth: '12vw',
          maxHeight: '12vw',

          height: 'auto',
          width: '100%',
        }}
        src={item.fields.file.url}
      />
      <p>{item.fields.title}</p>
    </div>
  );
}
