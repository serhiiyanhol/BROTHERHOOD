import { Asset } from 'contentful';

export default function Title({ title, logo }: { title: string, logo: Asset }) {
  return (
    <div className="row g-0 m-0 pt-3">
      <div
        style={{
          position: 'relative',
        }}
      >
        {logo && (
          <img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
            }}
            src={logo.fields.file.url}
            alt={logo.fields.title}
          />
        )}
        {title && (<h1
          style={{
            textTransform: 'uppercase',
            fontSize: '4vw',
            lineHeight: '6vw',
            letterSpacing: '0.136em',
          }}
        >{title}</h1>)}
      </div>
    </div>
  );
}
