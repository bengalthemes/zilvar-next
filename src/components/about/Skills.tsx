import { Skill } from '@/types';
import ProgressBar from '../ui/progress-bar';

export default function Skills({ skillsData }: { skillsData: Skill[] }) {
  return (
    <div className="relative border-b border-gray-100 dark:border-gray-750 mb-7 pb-7 last:mb-0 last:pb-0 last:border-b-0">
      <h3 className="mb-5 text-lg font-semibold">Coding Skills</h3>
      <div className="block">
        {skillsData?.map((item: Skill) => (
          <ProgressBar
            className="mb-5 last:mb-2 pb-0.5 last:pb-0"
            key={item?.id}
            title={item?.title}
            progressPercentage={item?.percentage}
          />
        ))}
      </div>
    </div>
  );
}
