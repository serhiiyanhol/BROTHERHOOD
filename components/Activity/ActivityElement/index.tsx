import { Asset } from 'contentful';
import React from 'react';

export default ({ item }: { item: Asset }): React.ReactElement => (
  <div className="col padding-1">
    <img
      style={{
        maxHeight: '110px',
        maxWidth: '150px',
        height: '100%',
        width: '100%',
      }}
      src={item.fields.file.url}
    />
    <p
      style={{ fontSize: '1vw' }}
    >{item.fields.title} <span style={{ color: 'red' }}>{item.fields.description}</span></p>
  </div>
);
