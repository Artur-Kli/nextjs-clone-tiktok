import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from "./styles";


export default function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg">

          </LogoIcon>
          <Logo src="/images/logo.svg">

          </Logo>
        </LogoContainer>

        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22701564e997029c06d4700ae5375bec.jpeg?x-expires=1609948800&x-signature=UhcY6v297csKRu9SkHpxrisDQ88%3D" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}
