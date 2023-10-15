import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rem;
  @media (min-width: 769px) {
    margin-bottom: 0rem;
  }
`;

const WrongIcon = styled.img`
  width: 5.819rem;
  height: 7.029rem;
`;

const Title = styled.span`
  display: block;
  margin-top: 2rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: center;
  color: #8e8e93;
  @media (min-width: 769px) {
    margin-top: 1.7rem;
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;

const ErrorMessage = () => {
  return (
    <Container>
      <WrongIcon src="/assets/something_went_wrong.svg" alt="crash" />
      <Title>Oops! Something went wrong.</Title>
    </Container>
  );
};

export default ErrorMessage;
