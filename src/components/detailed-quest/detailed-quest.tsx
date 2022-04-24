import { useState } from 'react';
import { MainLayout } from '../common/common';
import { IconClock, IconPerson, IconPuzzle } from '../svg/svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { langChanger } from '../../utils/utils';
import { useQuest } from '../../hooks/useFetch';
import Loader from '../common/loading/loading';

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
          <S.Main>
            <S.PageImage
              src={`../${coverImg}`}
              alt="Квест Маньяк"
              width="1366"
              height="768"
            />
            <S.PageContentWrapper>
              <S.PageHeading>
                <S.PageTitle>{title}</S.PageTitle>
                <S.PageSubtitle>{type}</S.PageSubtitle>
              </S.PageHeading>

              <S.PageDescription>
                <S.Features>
                  <S.FeaturesItem>
                    <IconClock width="20" height="20" />
                    <S.FeatureTitle>{duration}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPerson width="19" height="24" />
                    <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPuzzle width="24" height="24" />
                    <S.FeatureTitle>{langChanger(level)}</S.FeatureTitle>
                  </S.FeaturesItem>
                </S.Features>

                <S.QuestDescription>
                  {description}
                </S.QuestDescription>

                <S.QuestBookingBtn onClick={() => setIsModalOpen(true)}>
              Забронировать
                </S.QuestBookingBtn>
              </S.PageDescription>
            </S.PageContentWrapper>

            {isModalOpen && (
              <BookingModal setIsModalOpen={setIsModalOpen} />
            )}
          </S.Main>
        </MainLayout>
      )}
    </>
  );
}
