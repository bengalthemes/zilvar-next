import React from 'react';
import SubHeading from './sub-heading';
import cn from 'classnames';

interface SectionHeadingProps {
  className?: string;
  serialNo?: string;
  subHeading?: string;
  headingFirstText: string;
  headingLastText?: string;
}

export default function SectionHeading({
  className = 'mb-5 -mt-1 md:mb-0',
  serialNo,
  subHeading,
  headingFirstText,
  headingLastText,
}: SectionHeadingProps) {
  return (
    <div className={cn('relative', className)}>
      {subHeading && <SubHeading title={subHeading} serialNo={serialNo} />}
      <h2 className="font-bold text-[32px] xl:text-[44px] mt-3.5 tracking-[1px] leading-snug">
        {headingFirstText}{' '}
        {headingLastText && (
          <span className="text-stroke-1">{headingLastText}.</span>
        )}
      </h2>
    </div>
  );
}
