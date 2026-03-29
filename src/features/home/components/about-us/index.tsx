'use client';

import { Target, WandSparkles, Zap } from 'lucide-react';
import AboutUs from './about-us';

const aboutusData = [
  {
    icon: WandSparkles,
    title: 'Creativity',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Zap,
    title: 'Innovation',
    color: 'bg-teal-400/10 text-teal-400',
  },
  {
    icon: Target,
    title: 'Strategy',
    color: 'bg-orange-400/10 text-orange-400',
  },
];

const statisticsCounter = [
  {
    title: 'Projects Completed',
    count: 40,
  },
  {
    title: 'Happy Clients',
    count: 150,
  },
  {
    title: 'Years of Experience',
    count: 5,
  },
  {
    title: 'Satisfied Clients',
    count: 80,
  },
];

const AboutAndStats01 = () => {
  return (
    <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
  );
};

export default AboutAndStats01;
