import { AboutPageContextProvider } from '@/contexts/about-page-context';

export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AboutPageContextProvider>{children}</AboutPageContextProvider>;
}
