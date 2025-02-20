import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaLaptopCode, FaSitemap, FaChartLine, FaBullseye } from 'react-icons/fa';
import './AboutFoundation.css';

const AboutFoundation = () => {
  const timelineItems = [
    {
      id: 1,
      title: 'Mission and Vision',
      icon: <FaBullseye />,
      position: 'top'
    },
    {
      id: 2,
      title: 'Core Values',
      icon: <FaLaptopCode />,
      position: 'bottom'
    },
    {
      id: 3,
      title: 'Foundation History',
      icon: <FaSitemap />,
      position: 'top'
    },
    {
      id: 4,
      title: 'Governance Structure',
      icon: <FaChartLine />,
      position: 'bottom'
    },
    {
      id: 5,
      title: 'Funding Approach',
      icon: <FaBullseye />,
      position: 'top'
    }
  ];

  return (
    <div className='container'>
    <div className=" about-foundation-container">
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <ul className="timeline-list">
          {timelineItems.map((item) => (
            <li key={item.id} className={`timeline-item ${item.position}`}>
              <div className="timeline-circle">
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h5>{item.title}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutFoundation;