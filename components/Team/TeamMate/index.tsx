import { Asset } from 'contentful';
import React from 'react';

export default ({ item }: { item: Asset }): React.ReactElement => (
  <div className="col">
    <img
      style={{
        maxWidth: '200px',
        maxHeight: '200px',

        height: 'auto',
        width: '100%',
      }}
      src={item.fields.file.url}
    />
    <p>{item.fields.title}</p>
  </div>
);
