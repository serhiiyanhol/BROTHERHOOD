import type { GetStaticProps } from 'next';
import client from '../contentful';
import { IMain, IMainFields } from '../contentful-output';
import Activity from '../components/Activity';
import Cooperation from '../components/Cooperation';
import Title from '../components/Title';
import Financing from '../components/Financing';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main';
import Team from '../components/Team';
import Contacts from '../components/Contacts';
import NavListElement from '../types';

export default function Home({ main, locale }: { main: IMain, locale: string }) {
  const {
    fields: {
      title, subtitle, logo,
      aboutUsTitle, aboutUsContent, aboutUsContent2,
      activityTitle, activitySubtitle, activityList,
      cooperationTitle, cooperationContent, cooperationPartnersTitle, cooperationPartnersList,
      financingTitle, financingContent, financingContent2,
      teamTitle, teamBackground, teamPhotos,
      contactsTitle, contactsContent,
    }
  } = main;

  const navList: NavListElement[] = [
    { id: 'aboutUs', name: aboutUsTitle },
    { id: 'activity', name: activityTitle },
    { id: 'cooperation', name: cooperationTitle },
    { id: 'financing', name: financingTitle },
    { id: 'team', name: teamTitle },
    { id: 'contacts', name: contactsTitle },
  ];

  return (
    <main>
      <Main
        title={title}
        subtitle={subtitle}
        logo={logo}
        navList={navList}
        locale={locale}
      />
      <AboutUs
        title={<Title title={aboutUsTitle} logo={logo} />}
        aboutUsContent={aboutUsContent}
        aboutUsContent2={aboutUsContent2}
      />
      <Activity
        title={<Title title={activityTitle} logo={logo} />}
        activitySubtitle={activitySubtitle}
        activityList={activityList}
      />
      <Cooperation
        title={<Title title={cooperationTitle} logo={logo} />}
        cooperationContent={cooperationContent}
        cooperationPartnersTitle={cooperationPartnersTitle}
        cooperationPartnersList={cooperationPartnersList}
      />
      <Financing
        title={<Title title={financingTitle} logo={logo} />}
        financingContent={financingContent}
        financingContent2={financingContent2}
      />
      <Team
        title={<Title title={teamTitle} logo={logo} />}
        teamBackground={teamBackground}
        teamPhotos={teamPhotos}
      />
      <Contacts
        logo={logo}
        contactsTitle={contactsTitle}
        contactsContent={contactsContent}
      />
    </main>
  )
};

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  const data = await client.getEntries<IMainFields>({
    content_type: 'main',
    limit: 1,
    locale,
  });
  const [main] = data.items;

  return {
    props: {
      main,
      locale: locales?.find(item => item != locale),
    }
  }
};
