import { SearchStyled, SearchIconWrapper, StyledInputBase } from '../styledComponent/SearchStyled';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <SearchStyled>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </SearchStyled>
  )
}
