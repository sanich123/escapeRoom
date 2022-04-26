import { PageHeading, PageTitle } from '../common/common';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../utils/const';

export default function Page404() {

  return (
    <PageHeading>
      <PageTitle>
        <NavLink to={appRoutes.main}>
          <p>
            Если есть желание, перейдите на главную страницу, может там есть
            что-то интересное
          </p>
        </NavLink>
        <PageTitle>
          <p>Не удалось найти запрашиваемую Вами страницу.</p>
        </PageTitle>
      </PageTitle>
    </PageHeading>
  );
}
