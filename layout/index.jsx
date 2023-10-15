import Footer from "./components/Footer";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";

const ContentWrapper = styled.div`
  width: 75%;
`;
const Container = styled.div`
  display: flex;
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        {children}
        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
