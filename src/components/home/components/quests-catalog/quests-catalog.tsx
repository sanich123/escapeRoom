import { useState } from 'react';
import { useGetQuestsQuery } from '../../../../redux/quests-api';
import { Tabs, TabItem, TabBtn, TabTitle, Quest, QuestContent, QuestFeatureItem, QuestFeatures, QuestImage, QuestItem, QuestItemLink, QuestsList, QuestTitle } from './quests-catalog.styled';
import Loader from '../../../common/loading/loading';
import { langChanger, genreChanger } from '../../../../utils/utils';
import { messages, types } from '../../../../utils/const';
import { IconPerson, IconPuzzle } from '../../../svg/svg';
import { QuestType } from '../../../../types/types';

export default function QuestsCatalog() {
  const [filter, setFilter] = useState('');
  const { data: quests, isLoading, isSuccess, isError } = useGetQuestsQuery(filter ? `?type=${filter}` : '');

  return (
    <>
      <Tabs>
        {Object.entries(types).map(([rus, svg]) => (
          <TabItem key={rus}>
            <TabBtn
              isActive={genreChanger(rus) === filter}
              onClick={() => setFilter(genreChanger(rus))}
            >
              {svg}
              <TabTitle>{rus}</TabTitle>
            </TabBtn>
          </TabItem>
        ))}
      </Tabs>

      <QuestsList>
        {isSuccess &&
          quests.map(
            ({ id, coverImg, title, level, peopleCount }: QuestType) => (
              <QuestItem key={id}>
                <QuestItemLink to={`/detailed-quest/${id}`}>
                  <Quest>
                    <QuestImage
                      src={coverImg}
                      width="344"
                      height="232"
                      alt={`квест ${title}`}
                    />

                    <QuestContent>
                      <QuestTitle>{title}</QuestTitle>
                      <QuestFeatures>
                        <QuestFeatureItem>
                          <IconPerson />
                          {`${peopleCount[0]}–${peopleCount[1]} чел`}
                        </QuestFeatureItem>
                        <QuestFeatureItem>
                          <IconPuzzle />
                          {langChanger(level)}
                        </QuestFeatureItem>
                      </QuestFeatures>
                    </QuestContent>
                  </Quest>
                </QuestItemLink>
              </QuestItem>
            ),
          )}

        {isLoading && <Loader />}

        {isError && <h2>{messages.failedQuests}</h2>}
      </QuestsList>
    </>
  );
}
