import Image from 'next/image';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

import dashboardPhotoGraphyImage1 from '../assets/images/dashboard-photography-1.png';
import dashboardPhotoGraphyImage2 from '../assets/images/dashboard-photography-2.png';
import floorPlansImage from '../assets/images/floor-plans.png';
import interactiveToursImage from '../assets/images/interactive-tours.png';
import renderingsImage from '../assets/images/renderings.png';
import videoImage from '../assets/images/video.png';
import virtualStagingImage from '../assets/images/virtual-staging.png';

export const creativeMediaList = [
  {
    header: 'Photography',
    description:
      'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
    list: ['Drone Photography', 'Interiors', 'Exteriors / Architectural'],
    images: [dashboardPhotoGraphyImage1, dashboardPhotoGraphyImage2],
  },
  {
    header: 'Virtual Staging',
    description:
      'Our staging will help you sell the potential of your space.\n' +
      'We can work off of our own photography or photos you provide.',
    images: [virtualStagingImage],
  },
  {
    header: 'Renderings',
    description:
      'Renderings are the gold standard in pre-construction marketing.',
    list: ['Interiors', 'Exteriors'],
    images: [renderingsImage],
  },
  {
    header: 'Interactive Tours',
    description:
      'Give your audience the ability to explore your property without requiring in-person travel.',
    list: ['Matterport', 'Video Walkthroughs'],
    images: [interactiveToursImage],
  },
  {
    header: 'Floor Plans',
    description:
      'We produce laser-precise floor plans faster than any other service.',
    list: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
    images: [floorPlansImage],
  },
  {
    header: 'Video',
    description:
      'Video content has higher engagement and will help your property stand out online.',
    list: ['Drone Cinematography', 'Interiors', 'Exteriors / Architectural'],
    images: [videoImage],
  },
];

export default function Home() {
  return (
    <div className="w-full h-full p-[80px] flex-col justify-start items-center gap-[80px] inline-flex bg-gray">
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="max-w-[730px] text-center text-darkBlue text-6xl font-bold font-heading leading-none">
          We make creative media that{' '}
          <span className="text-indigo-500 text-6xl font-bold font-heading leading-none">
            adds value
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creativeMediaList.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            list={item.list}
            description={item.description}
            images={item.images}
          />
        ))}
      </div>
      <Button value="Get Started" />
    </div>
  );
}
