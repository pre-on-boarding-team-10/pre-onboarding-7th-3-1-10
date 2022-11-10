import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <Wrap>
      <SearchBar></SearchBar>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 65%;
  height: 100vh;
  border: 1px solid red;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  /* align-items: center; */
`;

export default Home;
