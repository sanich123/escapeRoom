import { Link } from '../common/header/header.styled';

export default function Page404() {
  return (
    <>
      <h1>Не удалось найти запрашиваемую Вами страницу.</h1>
      <Link to='/'>
        <h2>Если есть желание, перейдите на главную страницу, может там есть что-то интересное</h2>
      </Link>
    </>

  );
}
