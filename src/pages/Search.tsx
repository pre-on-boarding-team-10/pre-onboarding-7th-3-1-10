import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search: React.FC = (): React.ReactElement => {
  return (
    <SearchLayout>
      <SearchHeader>
        <SearchH1></SearchH1>
        <SearchH1></SearchH1>
      </SearchHeader>
      <SearchSection>
        <SearchInputBox>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <SearchInput type="text" placeholder="질환명을 입력해주세요." />
          <SearchButton>검색</SearchButton>
        </SearchInputBox>
        <SearchResultList>
          <SearchResultH3></SearchResultH3>
          <SearchResultItem>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <SearchResultParagraph></SearchResultParagraph>
          </SearchResultItem>
        </SearchResultList>
      </SearchSection>
    </SearchLayout>
  );
};

export default Search;

const SearchLayout = styled.main``;
const SearchHeader = styled.header``;
const SearchSection = styled.section``;
const SearchInputBox = styled.div``;

const SearchH1 = styled.h1``;
const SearchResultH3 = styled.h3``;
const SearchInput = styled.input``;
const SearchButton = styled.button``;
const SearchResultList = styled.ul``;
const SearchResultItem = styled.li``;
const SearchResultParagraph = styled.p``;
