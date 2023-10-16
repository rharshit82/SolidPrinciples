import Footer from "./components/Footer";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";

const ContentWrapper = styled.div`
  width: 85%;
  main {
    min-height: 65vh;
    padding: 2rem 5rem;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <main>{children}</main>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
