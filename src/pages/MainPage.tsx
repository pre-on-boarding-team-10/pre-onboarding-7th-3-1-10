import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <Section>
      <Container>MainPage</Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #cae9ff;
`;
export default MainPage;
