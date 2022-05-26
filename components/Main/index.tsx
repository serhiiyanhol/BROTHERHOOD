import React, { useEffect, useRef } from 'react';
import { Asset } from 'contentful';
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import WrapperDark from '../Wrappers/Dark';
import NavListElement from '../../types';
import Link from 'next/link';

export default function Main({
  logo,
  title,
  subtitle,
  navList,
  locale,
}: {
  logo: Asset,
  title: Document,
  subtitle: string,
  navList: NavListElement[],
  locale: string,
}) {
  const navMenu = useRef<HTMLHeadingElement>(null);
  const main = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(main.current && navMenu.current) {
      if(main.current.getBoundingClientRect().bottom <= 60) {
        navMenu.current.classList.add('fixed-top');
      }
    }
  }, [navMenu.current, main.current]);

  const onScroll = () => {
    if(main.current && navMenu.current) {
      if(main.current.getBoundingClientRect().bottom <= 60) {
        navMenu.current.classList.add('fixed-top');
      } else {
        navMenu.current.classList.remove('fixed-top');
      }
    }
  }

  useEffect(() => {
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll)
    }
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll]);

  const path = locale === 'en-US' ? `/${locale}` : '/';

  return (
    <WrapperDark>
      <div
        className="row g-0 m-0"
        ref={main}
      >
        {logo && (
          <div className="col-3 padding-tb-3">
            <img
              style={{
                maxWidth: 500,
                width: '100%',
                height: 'auto',
              }}
              src={logo.fields.file.url}
              alt={logo.fields.title}
            />
          </div>
        )}
        <div
          className="text-center col-9 text-uppercase padding-tb-3"
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1vw',
              right: '1vw',
            }}
          >
            <Link href={path} locale={locale}>
              <a className="anchor">{locale}</a>
            </Link>
          </div>
          {title && (
            <div
              style={{
                fontSize: '4vw',
                lineHeight: '6vw',
                letterSpacing: '0.065em',
              }}
            >
              {documentToReactComponents(title)}
            </div>
          )}
          {subtitle && (
            <p
              className="padding-t-3"
              style={{
                fontSize: '2vw',
                letterSpacing: '0.529em',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <nav className="navbar padding-b-1" ref={navMenu}>
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#353830',
          }}
        >
          {navList && navList.length ? navList.map(item => (
            <Link href={`/#${item.id}`} key={item.id}>
              <a className="anchor">{item.name}</a>
            </Link>
          )) : null}
        </div>
      </nav>
    </WrapperDark>
  );
}
