import Header from '../Header'
import Sidebar from '../Sidebar'
import { Container, SidebarContainer, ContentContainer } from './styles'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
}
