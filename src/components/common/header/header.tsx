import logo from '../../../assets/img/logo.svg';
import { appRoutes, navLinks, PHONE_NUMBER } from '../../../utils/const';
import { StyledHeader, HeaderWrapper, Logo, Links, LinkItem, Link, Phone } from './header.styled';

export default function Header() {

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo to={appRoutes.main}>
          <img src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </Logo>

        <nav>
          <Links>
            {Object.entries(navLinks).map(([rus, path]) => (
              <LinkItem key={rus}>
                <Link
                  exact
                  to={path}
                  activeStyle={{
                    color: '#F2890F',
                  }}
                >
                  {rus}
                </Link>
              </LinkItem>
            ))}
          </Links>
        </nav>
        <Phone href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Phone>
      </HeaderWrapper>
    </StyledHeader>
  );
}

