import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const getWidthFromLevel = (level: number) => {
    const percentage = (level / 5) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: getWidthFromLevel(skill.level) }}
        />
      </div>
    </div>
  );
};