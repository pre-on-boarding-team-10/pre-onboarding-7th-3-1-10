import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { useRecoilValue } from 'recoil';
import { recommendationList, recentSearchList } from '../recoil/SearchWord';

export type SearchBarTypes = {
  input: string;
};

function SearchModal({ input }: SearchBarTypes): React.ReactElement {
  const recentSearch = useRecoilValue<string[]>(recentSearchList);
  const reverseRecentSearch = [...recentSearch].reverse();
  useEffect(() => {
    console.log('api 통신');
  }, [input]);
  return (
    <Section>
      <Container>
        {input ? (
          <SearchedText>
            <IoIosSearch className="icon" />
            {input}
          </SearchedText>
        ) : (
          <>
            <RecentContainer>
              <ModalTitle>최근 검색어</ModalTitle>
              {recentSearch.length > 0 ? (
                reverseRecentSearch.map((searched: string) => {
                  return (
                    <RecentText key={searched}>
                      <IoIosSearch className="icon" />
                      {searched}
                    </RecentText>
                  );
                })
              ) : (
                <RecentText className="noting">
                  최근 검색어가 없습니다
                </RecentText>
              )}
            </RecentContainer>
            <RecommendContainer>
              <ModalTitle>추천 검색어로 검색해보세요</ModalTitle>
              <Recommendations>
                {recommendationList.map(recommendation => (
                  <Recommendation key={recommendation}>
                    {recommendation}
                  </Recommendation>
                ))}
              </Recommendations>
            </RecommendContainer>
          </>
        )}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 35rem;
  position: absolute;
  top: 29.1%;
`;

const Container = styled.article`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);
`;

const RecommendContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Recommendations = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.2rem;
  padding: 0.8rem 1.8rem 2rem 2rem;
`;

const Recommendation = styled.button`
  width: 100%;
  height: 1.5rem;
  color: #007be9;
  font-weight: bold;
  background-color: #eef8ff;
  border-radius: 20px;
  padding: 1.3rem 0;
  line-height: 0;
`;

const RecentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;

const RecentText = styled.span`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 1.7;
  padding: 0.5rem 2.2rem 0.5rem 2.2rem;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  &.noting {
    color: #b3b3b3;
    &:hover {
      background-color: #fff;
      cursor: default;
    }
  }
  .icon {
    position: relative;
    top: 6px;
    left: -7px;
    color: #808080;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SearchedText = styled.span`
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  padding: 1.5rem;

  .icon {
    position: relative;
    top: 6px;
    left: -5px;
    color: #808080;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ModalTitle = styled.h2`
  color: #808080;
  padding: 1.8rem 0 0.5rem 1.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
`;

export default SearchModal;
