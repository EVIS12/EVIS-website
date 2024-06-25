import {
  Highlights,
  MainActivities,
  PagesHero,
  PlanVisitSec,
  RegisterSection,
  WhoYouMeet,
  WhyVisit,
} from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';
import VisitRegisterImage from '@/public/imgs/visit.webp';
import Evehicle from '@/public/icons/e-vehicle.webp';
import techPark from '@/public/icons/tech-park.webp';
import testDrive from '@/public/icons/test-drive.webp';
import openSessions from '@/public/icons/open-sessions.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit',
};

export const revalidate = 180;

export default async function Visit() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <main>
      <PagesHero
        bg="bg-visit-bg"
        title="Explore the Future of Electric Mobility with Us!"
        buttons={[
          {
            title: 'Register ',
            url: visitLink.link,
          },
        ]}
      />
      <WhyVisit />
      <MainActivities
        leftActivities={[
          {
            name: 'E-Vehicle Show',
            icon: Evehicle,
            link: '/activities/e-vehicle-show',
          },
          {
            name: 'Tech Park',
            icon: techPark,
            link: '/activities/tech-park',
          },
        ]}
        rightActivities={[
          {
            name: 'EV Test Drive',
            icon: testDrive,
            link: '/activities/test-drive',
          },
          {
            name: 'Networking',
            icon: openSessions,
            link: '/activities/networking-reception',
          },
        ]}
        mainAddress={{ title: 'Your Portal to the Future of E-Mobility' }}
      />{' '}
      <Highlights />
      <WhoYouMeet />
      <PlanVisitSec />
      <RegisterSection
        image={VisitRegisterImage}
        title="Visit"
        description="Ready to be a part of the electric mobility revolution? Register now to secure your spot at EVIS and embark on a journey that will shape the future of sustainable transportation."
        btn={{ title: 'Register', url: visitLink?.link ?? '' }}
      />
    </main>
  );
}
