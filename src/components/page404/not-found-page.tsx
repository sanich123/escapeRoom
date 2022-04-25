import { PageHeading, PageTitle } from '../common/common';
import { NavLink } from 'react-router-dom';

export default function Page404() {

  return (
    <PageHeading>
      <PageTitle>
        <NavLink to="/">
          <h4>
            Если есть желание, перейдите на главную страницу, может там есть
            что-то интересное
          </h4>
        </NavLink>
        <PageTitle>
          <h5>Не удалось найти запрашиваемую Вами страницу.</h5>
        </PageTitle>
      </PageTitle>
    </PageHeading>
  );
}
