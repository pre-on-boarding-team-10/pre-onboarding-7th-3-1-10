import React, { useState, useEffect, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';

function MainPage() {
  const [inputs, setInputs] = useState('');
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputRef);
    setInputs(e.target.value);
  };

  useEffect(() => {
    console.log('qq');
  }, [focused]);

  return (
    <Section>
      <Container>
        <Title>
          국내 모든 임상 시험 검색하고 <br />
          온라인으로 참여하기
        </Title>
        <SearchBarContainer className={focused ? 'focus' : 'blur'}>
          <InputContainer>
            <SearchBarInput
              type="search"
              spellCheck="false"
              ref={inputRef}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChange}
              value={inputs}
            />
          </InputContainer>
          <SearchBtn>
            <IoIosSearch className="icon" />
          </SearchBtn>
        </SearchBarContainer>
      </Container>
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
  padding: 7.5rem 0 18.125rem 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
  border-radius: 42px;
  border: 0.2rem solid;
  border-color: #ffffff;
  background-color: #ffffff;
  align-items: center;
  padding-right: 0.5rem;
  &.focus {
    border-color: #007be9;
  }
`;
const SearchBtn = styled.button`
  color: #fff;
  background-color: #007be9;
  padding: 0.5rem;
  border-radius: 50%;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 20px 10px 20px 24px;
`;

const SearchBarInput = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  border: #fff;
`;
export default MainPage;
