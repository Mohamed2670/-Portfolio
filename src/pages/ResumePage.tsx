import React from 'react';
import { Download } from 'lucide-react';
import { experiences, education, skills, resumePdfUrl } from '../data/resume';
import { SkillBar } from '../components/SkillBar';
import { PDFViewer } from '../components/PDFViewer';

export const ResumePage: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  // Get category title
  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend';
      case 'backend':
        return 'Backend';
      case 'devops':
        return 'DevOps';
      case 'other':
        return 'Other';
      default:
        return category;
    }
  };
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Resume</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My professional experience, education, and skills.
            </p>
          </div>
          <a
            href={resumePdfUrl}
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4 lg:mt-0"
          >
            <Download size={16} className="mr-2" />
            Download PDF
          </a>
        </div>
        
        {/* PDF Viewer */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PDF Preview</h2>
          <PDFViewer pdfUrl={resumePdfUrl} />
        </div> */}
        
        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map(experience => (
              <div key={experience.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.startDate} – {experience.endDate || 'Present'}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {experience.company}, {experience.location}
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          
          <div className="space-y-8">
            {education.map(edu => (
              <div key={edu.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {edu.institution}, {edu.location}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(skillsByCategory).map(category => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {getCategoryTitle(category)}
                </h3>
                
                <div>
                  {skillsByCategory[category].map(skill => (
                    <SkillBar key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};