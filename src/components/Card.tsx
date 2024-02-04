import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  header: string;
  list?: string[];
  description: string;
  images: StaticImageData[];
}

export const Card: FC<CardProps> = ({ header, list, description, images }) => {
  return (
    <div className="flex justify-center items-center flex rounded bg-white">
      <div className="h-full max-width-1/2 flex flex-col justify-center items-start gap-[3px] inline-flex">
        {images.map(image => (
          <Image
            className="h-full min-w-[184px] max-w-fit self-stretch"
            src={image}
            alt="Photo"
          />
        ))}
      </div>
      <div className="pl-10 pr-10 pt-10 pb-10 flex-col justify-start items-start gap-[12px] inline-flex">
        <div className="flex-col justify-center items-start gap-3 flex">
          <h3 className="text-charcoal text-[24px] font-bold leading-[32px] font-heading">
            {header}
          </h3>
          <ul className="list-disc text-tan leading-[26px] gap-[8px] pl-[18px]">
            {list?.map((item, index) => (
              <li className="text-charcoal font-bold text-[15px] li-marker">
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full text-charcoal leading-[24px] font-semibold text-[15px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
