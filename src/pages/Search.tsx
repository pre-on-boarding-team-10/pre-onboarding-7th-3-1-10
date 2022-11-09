import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MininFlexStyle } from '../styles/common';
import { SearchService } from '../service/SearchService';
import { useState } from 'react';
import { ISearchResultListState } from '../types/pages';

const Search = (): React.ReactElement => {
  const [searchResultList, setSearchResultList] = useState<
    ISearchResultListState[]
  >([]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchService = new SearchService();
    const searchResultResponse = await searchService.getSearchResult({
      q: e.target.value,
    });
    setSearchResultList(searchResultResponse.data);
  };

  return (
    <SearchLayout>
      <SearchHeader>
        <h1>국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </SearchHeader>
      <SearchSection>
        <SearchInputBox>
          <FontAwesomeIcon
            className="search-icon width_height-18"
            icon={faMagnifyingGlass}
          />
          <SearchInput
            type="text"
            placeholder="질환명을 입력해주세요."
            onChange={onChange}
          />
          <SearchButton>검색</SearchButton>
        </SearchInputBox>
        <SearchResultList>
          <SearchResultH3>추천 검색어</SearchResultH3>
          {searchResultList.map(searchResultItem => (
            <SearchResultItem key={searchResultItem.sickCd}>
              <FontAwesomeIcon
                className="width_height-18"
                icon={faMagnifyingGlass}
              />
              <SearchResultParagraph>
                {searchResultItem.sickNm}
              </SearchResultParagraph>
            </SearchResultItem>
          ))}
        </SearchResultList>
      </SearchSection>
    </SearchLayout>
  );
};

export default Search;

const SearchLayout = styled.main`
  ${MininFlexStyle({
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  })}
  padding-top: 5rem;
  height: 100vh;
  background-color: #d0e7fd;
`;

const SearchHeader = styled.header`
  ${MininFlexStyle({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  })}
  font-size: 3.4rem;
  text-align: center;
`;

const SearchSection = styled.section`
  position: relative;
  width: 60%;

  .width_height-18 {
    width: 1.6rem;
    height: 1.6rem;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
  }
`;

const SearchInputBox = styled.div`
  ${MininFlexStyle({
    gap: '1rem',
  })}
  position: relative;
`;

const SearchResultH3 = styled.h3`
  font-size: 1.4rem;
  color: #a0a3a6;
  font-weight: 500;
  padding: 0 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 2rem 10.86rem 2rem 4.8rem;
  border: 0;
  font-size: 2rem;
  border-radius: 30px;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background-color: #077be8;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  padding: 2.2rem;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  &:hover {
    background-color: #0a75d8;
  }
`;

const SearchResultList = styled.ul`
  ${MininFlexStyle({
    flexDirection: 'column',
    gap: '1rem',
    margin: '1rem 0 0 0',
  })}
  position: absolute;
  width: 100%;
  top: 6.4rem;
  background-color: #ffffff;
  padding: 2.4rem 0;
  border-radius: 20px;
`;

const SearchResultItem = styled.li`
  ${MininFlexStyle({
    gap: '1rem',
  })}
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f6fa;
  }
`;

const SearchResultParagraph = styled.p`
  font-size: 1.6rem;
`;
