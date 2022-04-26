import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import * as S from './contacts.styled';
import { Map, Placemark } from 'react-yandex-maps';
import { YMaps } from 'react-yandex-maps';
import { COORDINATES, MAP_HEIGHT, MAP_WIDTH, PHONE_NUMBER } from '../../utils/const';

export default function Contacts() {

  return (
    <YMaps>
      <MainLayout>
        <S.Main>
          <S.ContentWrapper>
            <S.PageHeading>
              <PageTitle>Контакты</PageTitle>
              <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
            </S.PageHeading>

            <S.Contacts>
              <S.ContactsList>
                <S.ContactTitle>Адрес</S.ContactTitle>
                <S.ContactValue>
                  <S.ContactAddress>
                    Санкт-Петербург,
                    <br />
                    Набережная реки Карповка, д 5
                  </S.ContactAddress>
                </S.ContactValue>

                <S.ContactTitle>Режим работы</S.ContactTitle>
                <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

                <S.ContactTitle>Телефон</S.ContactTitle>
                <S.ContactValue>
                  <S.ContactLink href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </S.ContactLink>
                </S.ContactValue>

                <S.ContactTitle>E-mail</S.ContactTitle>
                <S.ContactValue>
                  <S.ContactLink href="mailto:info@escape-room.ru">
                    info@escape-room.ru
                  </S.ContactLink>
                </S.ContactValue>
              </S.ContactsList>

              <S.ContactsMap>
                <Map
                  width={MAP_WIDTH}
                  height={MAP_HEIGHT}
                  defaultState={{ center: COORDINATES, zoom: 16 }}
                >
                  <Placemark geometry={COORDINATES} />
                </Map>
              </S.ContactsMap>
            </S.Contacts>
          </S.ContentWrapper>
        </S.Main>
      </MainLayout>
    </YMaps>
  );
}

