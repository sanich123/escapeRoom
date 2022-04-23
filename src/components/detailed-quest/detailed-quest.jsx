import { useState } from 'react';
import { MainLayout } from '../../components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { langChanger } from '../../utils/utils';
import { useQuest } from '../../hooks/useFetch';

export default function DetailedQuest() {
  const {id} = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const quest = useQuest(id);

  return (
    <>
      {!quest && <h1>Не удалось получить данные по квесту</h1>}

      {quest && (
        <MainLayout>
          <S.Main>
            <S.PageImage
              src={`../${quest.coverImg}`}
              alt="Квест Маньяк"
              width="1366"
              height="768"
            />
            <S.PageContentWrapper>
              <S.PageHeading>
                <S.PageTitle>{quest.title}</S.PageTitle>
                <S.PageSubtitle>{quest.type}</S.PageSubtitle>
              </S.PageHeading>

              <S.PageDescription>
                <S.Features>
                  <S.FeaturesItem>
                    <IconClock width="20" height="20" />
                    <S.FeatureTitle>{quest.duration}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPerson width="19" height="24" />
                    <S.FeatureTitle>{`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPuzzle width="24" height="24" />
                    <S.FeatureTitle>{langChanger(quest.level)}</S.FeatureTitle>
                  </S.FeaturesItem>
                </S.Features>

                <S.QuestDescription>
                  {quest.description}
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
