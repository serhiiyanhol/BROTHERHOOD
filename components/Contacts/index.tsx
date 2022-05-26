import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Asset } from 'contentful';
import WrapperLight from '../Wrappers/Light';
import Row from '../Wrappers/Row';

export default ({
  logo,
  contactsTitle,
  contactsContent,
}: {
  logo: Asset,
  contactsTitle: string,
  contactsContent: Document,
}) => (
  <WrapperLight id="contacts">
    <div
      className="padding-tb-2"
    >
      <Row>
        {logo && (
          <div className="p-0 col-3 text-start">
            <img
              style={{
                maxWidth: '400px',
                height: 'auto',
                width: '100%',
              }}
              src={logo.fields.file.url}
              alt={logo.fields.title}
            />
          </div>
        )}
        <div
          className="text-center p-0 col-9 align-self-end"
          style={{
            fontFamily: 'Rubik, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.136em',
          }}
        >
          <p
            className="padding-tb-2"
            style={{
              fontSize: '4vw',
              lineHeight: '6vw',
            }}
          >
            {contactsTitle}
          </p>
          <div
            style={{
              fontSize: '1.5vw',
              textDecoration: 'none',
            }}
          >
            {contactsContent && documentToReactComponents(contactsContent)}
          </div>
        </div>
      </Row>
    </div>
  </WrapperLight>
);
