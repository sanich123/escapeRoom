import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../utils/const';

export default function Page404() {

  return (
    <>
      <h1>Не удалось найти запрашиваемую Вами страницу.</h1>
      <NavLink to={appRoutes.main}>
        <p>
          Если есть желание, перейдите на <span style={{color: 'red'}}>ГЛАВНУЮ СТРАНИЦУ</span>, может
          там есть что-то интересное
        </p>
      </NavLink>
    </>
  );
}
