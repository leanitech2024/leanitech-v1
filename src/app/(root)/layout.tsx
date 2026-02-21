import Header from '@/components/shadcn-space/blocks/hero-01/header';
import Footer from '@/components/shared/footer';
// import { Navbar } from '@/components/shared/navbar';
import Footer2 from '@/components/shadcn-space/blocks/footer-02/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {children}
      <Footer2 />
      <Footer />
    </>
  );
}
