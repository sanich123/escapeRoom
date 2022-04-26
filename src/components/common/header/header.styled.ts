import styled from 'styled-components';
import { Container, NavLink } from '../common';

const StyledHeader = styled.header`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 50%;

  width: 100vw;

  transform: translateX(-50%);
  background-color: rgba(26, 26, 26, 0.9);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  min-height: 74px;
  padding-top: 23px;
  padding-right: 33px;
  padding-bottom: 23px;
  padding-left: 32px;
`;

const Logo = styled(NavLink)`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const LogoLink = styled(NavLink)`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  max-width: 600px;
  margin: 0;
  padding: 0;
  padding-top: 17px;
  padding-bottom: 17px;
  margin-bottom: -10px;
  list-style: none;
`;

const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 49px;
    margin-bottom: 10px;
  }
`;

const Link = styled(NavLink)`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};
    &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

const Phone = styled.a`
  margin-top: 17px;
  margin-left: auto;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: ${({ theme }) => theme.color.whiteSmoke};

  font-feature-settings: 'pnum' on, 'lnum' on;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  StyledHeader,
  HeaderWrapper,
  Logo,
  LogoLink,
  Links,
  LinkItem,
  Link,
  Phone,
};
