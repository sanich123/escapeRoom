import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import { QuestsCatalog } from './components/components';
import { Main } from './home.styled';

export default function HomePage() {
  return (
    <MainLayout>
      <Main forwardedAs="main">

        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>

        <QuestsCatalog />

      </Main>
    </MainLayout>
  );
}
