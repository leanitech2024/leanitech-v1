'use client';
import { ArrowDownUp, BellRing, RotateCw, Tag } from 'lucide-react';
import Feature from './feature';

const featureData = [
  {
    icon: ArrowDownUp,
    content:
      'Seamlessly synchronize your business data across ERP systems and applications without manual effort, ensuring accuracy and efficiency.',
  },
  {
    icon: BellRing,
    content:
      'Receive real-time notifications and actionable insights to make faster, data-driven business decisions.',
  },
  {
    icon: RotateCw,
    content:
      'Optimize your processes with intelligent automation that keeps your operations running smoothly and efficiently.',
  },
  {
    icon: Tag,
    content:
      'Organize your business data with advanced tagging, search, and cloud-based accessibility for better productivity.',
  },
];

const Feature01 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature01;
