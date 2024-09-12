import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onQueryChange: (query: string) => void;
}

const SearchBar = ({ onQueryChange }: SearchBarProps) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        onQueryChange((e.target as HTMLInputElement).value.toLowerCase());
      }}
      variant="outlined"
      placeholder="Поиск по названию"
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon className="searchIcon" />
    </IconButton>
  </form>
);

export default SearchBar;
