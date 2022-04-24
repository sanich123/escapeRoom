import logo from '../../../assets/img/logo.svg';
import { navLinks } from '../../../utils/const';
import { useState } from 'react';
import { StyledHeader, HeaderWrapper, Logo, Image, Navigation, Links, LinkItem, Link, Phone } from '../header/header.styled';
export default function Header() {
  const [isActive, setIsActive] = useState('Квесты');

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo>
          <Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </Logo>

        <Navigation>
          <Links>
            {Object.entries(navLinks).map(([rus, path]) => (
              <LinkItem key={rus}>
                <Link
                  $isActiveLink={isActive === rus}
                  onClick={() => setIsActive(rus)}to={path}
                >
                  {rus}
                </Link>
              </LinkItem>
            ))}
          </Links>
        </Navigation>
        <Phone href="tel:88003335599">8 (800) 333-55-99</Phone>
      </HeaderWrapper>
    </StyledHeader>
  );
}

