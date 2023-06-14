import { Service } from '@/types';
import ProgressBar from '../ui/progress-bar';
// import * as DOMPurify from "dompurify";

export default function ServiceCard({ service }: { service: Service }) {
  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(description),
  // });
  const { title, shadowTitle, successRate, description, progressTitle } =
    service;
  return (
    <>
      <div className="relative">
        <div className="text-stroke-2 inline-flex tracking-[2px] leading-none font-extrabold uppercase text-[28px] relative md:text-[32px] before:absolute before:top-auto before:w-full before:h-3.5 before:bottom-0.5 before:z-10 before:bg-gradient-to-t before:from-white before:to-transparent dark:before:from-dark top-0.5 md:top-px">
          {shadowTitle}
        </div>
        <h3 className="mb-1.5 md:mb-4 z-10 relative font-semibold text-xl md:text-2xl -mt-4">
          {title}
        </h3>
      </div>
      <ProgressBar
        title={progressTitle}
        progressPercentage={successRate}
        variant="service"
      />
      {description && (
        <div
          className="pt-6 italic prose md:pt-8 prose-strong:font-semibold prose-strong:text-gray-600 prose-p:text-[15px] prose-p:leading-loose prose-p:text-body dark:prose-strong:text-gray-200 dark:prose-p:text-dark-base -mb-1"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
    </>
  );
}
