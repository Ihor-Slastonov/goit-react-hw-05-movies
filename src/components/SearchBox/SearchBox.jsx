
import { SearchBtn, SearchForm, SearchInput } from './SearchBox.styled';
import { BsSearch } from 'react-icons/bs';


export const SearchBox = () => {
  return (
    <SearchForm>
      <SearchBtn type="submit">
        <BsSearch size={22} />
      </SearchBtn>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};
