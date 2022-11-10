import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MininFlexStyle } from '../styles/common';
import { SearchService } from '../service/SearchService';
import { ChangeEvent, useState } from 'react';
import { ISearchResultListState } from '../types/pages';
import DOMPurify from 'dompurify';
import { replaceMatchedTextToBold } from '../utils/pages';
import useMoveUpAndDown from '../hooks/useMoveUpAndDown';

const Search = (): React.ReactElement => {
  const [typedSearchWord, setTypedSearchWord] = useState<string>('');
  const [searchResultList, setSearchResultList] = useState<
    ISearchResultListState[]
  >([]);
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

  const {
    onKeyDownHandler,
    initiallizeCurrLocatedIdx,
    scrollRef,
    currLocatedIdx,
  } = useMoveUpAndDown();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchService = new SearchService();
    setTypedSearchWord(e.target.value);
    const searchResultResponse = await searchService.getSearchResult({
      sickNm_like: e.target.value,
    });
    setSearchResultList(searchResultResponse.data);
  };

  const isEmptySearchResultList = searchResultList.length === 0;

  return (
    <SearchLayout>
      <SearchHeader>
        <h1>국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </SearchHeader>
      <SearchSection>
        <SearchInputBox>
          <FontAwesomeIcon
            className="search_icon width_height-18"
            icon={faMagnifyingGlass}
          />
          <SearchInput
            type="text"
            placeholder="질환명을 입력해주세요."
            onChange={onChange}
            onKeyDown={e => onKeyDownHandler(e, searchResultList)}
            onFocus={() => setIsInputFocus(true)}
            onBlur={e => {
              setIsInputFocus(false);
              initiallizeCurrLocatedIdx(e);
            }}
          />
          <SearchButton>검색</SearchButton>
        </SearchInputBox>
        {isInputFocus && (
          <SearchResultList ref={scrollRef} currLocatedIdx={currLocatedIdx}>
            <SearchResultH3>추천 검색어</SearchResultH3>
            {isEmptySearchResultList ? (
              <EmptySearchResultParagraph>
                검색어 없음
              </EmptySearchResultParagraph>
            ) : (
              searchResultList.map((searchResultItem, searchResultItemIdx) => (
                <SearchResultItem
                  key={searchResultItem.sickCd}
                  className={
                    searchResultItemIdx === currLocatedIdx ? 'arrow_active' : ''
                  }
                >
                  <FontAwesomeIcon
                    className="width_height-18"
                    icon={faMagnifyingGlass}
                  />
                  <SearchResultParagraph
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        replaceMatchedTextToBold(
                          searchResultItem.sickNm,
                          typedSearchWord
                        )
                      ),
                    }}
                  />
                </SearchResultItem>
              ))
            )}
          </SearchResultList>
        )}
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

  .search_icon {
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

const SearchResultList = styled.ul<{ currLocatedIdx: number }>`
  ${MininFlexStyle({
    flexDirection: 'column',
    gap: '1rem',
    margin: '1rem 0 0 0',
  })}
  position: absolute;
  width: 100%;
  height: 40rem;
  top: 6.4rem;
  background-color: #ffffff;
  padding: 2.4rem 0;
  border-radius: 20px;
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const SearchResultItem = styled.li`
  ${MininFlexStyle({
    gap: '1rem',
  })}
  padding: 1rem 2rem;
  cursor: pointer;

  > p > strong {
    font-weight: 700;
  }

  &:hover {
    background-color: #f5f6fa;
  }

  &.arrow_active {
    background-color: #f5f6fa;
  }
`;

const SearchResultParagraph = styled.p`
  font-size: 1.6rem;
`;

const EmptySearchResultParagraph = styled.p`
  font-size: 1.6rem;
  margin: 10rem auto;
`;
