import { 
  Container, 
  MenuItem, 
  Following, 
  FollowingHeader, 
  InfoContainer, 
  Links 
} from './styles'
import User from '../User'

export default function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>For You</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Following</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Recommended accounts</FollowingHeader>
        <User user={{name: 'Lady Natasha', username: 'lady.natasha', avatar: 'https://p58-sign-sg.tiktokcdn.com/musically-maliva-obj/1631338426130438~c5_100x100.jpeg?x-expires=1609948800&x-signature=gjd26LhLqhh5jn1No2WxRPznnyg%3D'}}>

        </User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Info</a>
          <a>News</a>
          <a>Contact</a>
          <a>Occupation</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>TikTok For Good</a>
          <a>Advertise</a>
          <a>Developers</a>
          <a>Transparency</a>
        </Links>
        <Links margin>
          <a>Help</a>
          <a>Security</a>
          <a>Privacy policy</a>
        </Links>
        <Links margin>
          <a>Community rules</a>
          <a>More</a>
        </Links>
        <Links margin>
          <a>© 2021 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  )
}
