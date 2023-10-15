import Footer from "./components/Footer";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";

const ContentWrapper = styled.div`
  width: 85%;
  main {
    min-height: 65vh;
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
