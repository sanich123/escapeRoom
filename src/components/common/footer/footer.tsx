import { StyledFooter, SocialItem, SocialLink, StyledInstagramIcon, HiddenText, StyledVkIcon, Socials } from './footer.styled';

export default function Footer() {

  return (
    <StyledFooter>
      <Socials>
        <SocialItem>
          <SocialLink target="_blank" href="https://instagram.com">
            <StyledInstagramIcon />
            <HiddenText>Инстаграм</HiddenText>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink target="_blank" href="https://vk.com">
            <StyledVkIcon />
            <HiddenText>Вконтакте</HiddenText>
          </SocialLink>
        </SocialItem>
      </Socials>
    </StyledFooter>
  );
}

