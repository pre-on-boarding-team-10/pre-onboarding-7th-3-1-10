import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Section>
      <Container>
        <Logocontainer>
          <LogoImg
            src="https://st3.depositphotos.com/4060975/19348/v/450/depositphotos_193487222-stock-illustration-conical-flask-colored-line-icon.jpg"
            alt="로고 이미지"
          />
          <LogoTitle>한국임상정보</LogoTitle>
        </Logocontainer>
        <NavBtncontainer>
          <NavBtn>소개</NavBtn>
          <NavBtn>질문과 답변</NavBtn>
          <NavBtn>소식받기</NavBtn>
          <NavBtn>제휴/문의</NavBtn>
        </NavBtncontainer>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 3.5rem;
`;

const Container = styled.article`
  width: 62.5rem;
  margin: 0 auto;
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logocontainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 2.2rem;
`;

const LogoTitle = styled.button`
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 800;
  letter-spacing: -0.1em;
  padding: 0.5rem;
  background-color: transparent;
  color: #1e2025;
`;

const NavBtncontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavBtn = styled.button`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.018em;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #1e2025;
`;

export default Navbar;
