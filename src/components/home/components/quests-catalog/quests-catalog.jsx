import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useQuests } from '../../../../hooks/useFetch';
import { langChanger, genreChanger } from '../../../../utils/utils';
import { useState } from 'react';
import {types} from '../../../../utils/const';

export default function QuestsCatalog() {
  const [filter, setFilter] = useState('');
  const quests = useQuests(filter);

  return (
    <>
      <S.Tabs>
        {Object.entries(types).map(([rus, svg]) => (
          <S.TabItem key={rus}>
            <S.TabBtn
              isActive={genreChanger(rus) === filter}
              onClick={() => setFilter(genreChanger(rus))}
            >
              {svg}
              <S.TabTitle>{rus}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>

      <S.QuestsList>
        {quests?.map(({id, coverImg, title, level, peopleCount}) => (
          <S.QuestItem key={id}>
            <S.QuestItemLink to={`/detailed-quest/${id}`}>
              <S.Quest>
                <S.QuestImage
                  src={coverImg}
                  width="344"
                  height="232"
                  alt={`квест ${title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{title}</S.QuestTitle>
                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${peopleCount[0]}–${peopleCount[1]} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {langChanger(level)}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
        {!quests && (
          <h1>The list of quests is unavailable now</h1>
        )}
      </S.QuestsList>
    </>);
}

