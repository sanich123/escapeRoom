import { Header, Footer } from '../common';

export default function MainLayout({ children }: {children: string}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

