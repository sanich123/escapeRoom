import { useState } from 'react';
import { MainLayout, PageHeading, PageTitle } from '../common/common';
import { IconClock, IconPerson, IconPuzzle } from '../svg/svg';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { langChanger } from '../../utils/utils';
import Loader from '../common/loading/loading';
import { Main, PageImage, PageContentWrapper, PageSubtitle, PageDescription, Features, FeaturesItem, FeatureTitle, QuestBookingBtn, QuestDescription } from './detailed-quest.styled';
import { useGetQuestQuery } from '../../redux/quests-api';
import { defaultQuest, messages } from '../../utils/const';

export default function DetailedQuest() {
  const {id}: {id: string} = useParams();
  const {data: quest, isLoading, isError, isSuccess} = useGetQuestQuery(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {coverImg, title, type, duration, peopleCount, level, description} = quest || defaultQuest;

  return (
    <>
      {isError && <h2>{messages.failedQuest}</h2>}
      {isLoading && <Loader/>}
      {isSuccess && (
        <MainLayout>
          <Main>
            <PageImage
              src={`../${coverImg}`}
              alt={`Квест ${title}`}
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

                <QuestBookingBtn
                  onClick={() => setIsModalOpen(true)}
                >
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
