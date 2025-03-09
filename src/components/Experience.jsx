import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { download, downloadHover, resume } from '../assets';
import resumePdf from '../assets/resume/Syed.Ammar.pdf';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FaCheckCircle } from 'react-icons/fa';

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#eaeaec',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid  #232631',
      }}
      date={
        <div>
          <h3 className="text-dim text-[18px] font-bold font-beckman">
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
          {experience.title}
        </h3>
        <p
          className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <div className="mt-2">
          <h4 className="text-taupe text-[18px] font-semibold font-overcameBold tracking-[1px]">Overview</h4>
          <p className="text-[16px] mt-1 text-justify">{experience.details.overview}</p>
        </div>

        {!isExpanded && (
          <p className="text-sm text-center mt-2 text-taupe">
            Click to see details
          </p>
        )}

        {isExpanded && (
          <div className="mt-2">
            <h4 className="text-taupe text-[18px] font-semibold font-overcameBold tracking-[1px]">Responsibilities</h4>
            <ul className="mt-2 space-y-2">
              {experience.details.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="text-[16px] text-justify flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaCheckCircle className="mr-2 text-gray-500" />
                  <span className="font-medium">{responsibility}</span>
                </li>
              ))}
            </ul>

            {experience.details.links && experience.details.links.length > 0 && (
              <div className="mt-2">
                <h4 className="text-taupe text-[18px] font-semibold font-overcameBold tracking-[1px]">Links</h4>
                <ul className="mt-2 space-y-2">
                  {experience.details.links.map((link, index) => (
                    <li key={index} className="text-[16px]">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-sm text-center mt-2 text-taupe">
              Click to hide details
            </p>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          {/* Resume section */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
  sm:text-[18px] text-[14px] text-timberWolf 
  font-bold font-beckman items-center py-5 pl-3 pr-3 
  whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
  w-[125px] h-[46px] rounded-[10px] bg-jetLight 
  sm:mt-[22px] mt-[16px] hover:bg-battleGray 
  hover:text-eerieBlack transition duration-[0.2s] 
  ease-in-out"
              onClick={() =>
                window.open(
                  resumePdf,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
    w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');