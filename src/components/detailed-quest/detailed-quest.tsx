import { useState } from 'react';
import { MainLayout, PageHeading, PageTitle } from '../common/common';
import { IconClock, IconPerson, IconPuzzle } from '../svg/svg';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { langChanger } from '../../utils/utils';
import { useQuest } from '../../hooks/useFetch';
import Loader from '../common/loading/loading';
import { Main, PageImage, PageContentWrapper, PageSubtitle, PageDescription, Features, FeaturesItem, FeatureTitle, QuestBookingBtn, QuestDescription } from './detailed-quest.styled';

export default function DetailedQuest() {
  const {id}: {id: string} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quest = useQuest(id);

  if (!quest) {return <Loader/>;}

  const {coverImg, title, type, duration, peopleCount, level, description} = quest;

  return (
    <>
      {!quest && <h1>Не удалось получить данные по квесту</h1>}

      {quest && (
        <MainLayout>
          <Main>
            <PageImage
              src={`../${coverImg}`}
              alt="Квест Маньяк"
              width="1366"
              height="768"
            />
            <PageContentWrapper>
              <PageHeading>
                <PageTitle>{title}</PageTitle>
                <PageSubtitle>{type}</PageSubtitle>
              </PageHeading>

              <PageDescription>
                <Features>
                  <FeaturesItem>
                    <IconClock width="20" height="20" />
                    <FeatureTitle>{duration}</FeatureTitle>
                  </FeaturesItem>
                  <FeaturesItem>
                    <IconPerson width="19" height="24" />
                    <FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</FeatureTitle>
                  </FeaturesItem>
                  <FeaturesItem>
                    <IconPuzzle width="24" height="24" />
                    <FeatureTitle>{langChanger(level)}</FeatureTitle>
                  </FeaturesItem>
                </Features>

                <QuestDescription>
                  {description}
                </QuestDescription>

                <QuestBookingBtn onClick={() => setIsModalOpen(true)}>
              Забронировать
                </QuestBookingBtn>
              </PageDescription>
            </PageContentWrapper>

            {isModalOpen && (
              <BookingModal setIsModalOpen={setIsModalOpen} />
            )}
          </Main>
        </MainLayout>
      )}
    </>
  );
}
