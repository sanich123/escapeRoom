import { ChildrenType } from '../../../types/types';
import { Header, Footer } from '../common';

export default function MainLayout({ children }: ChildrenType) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

