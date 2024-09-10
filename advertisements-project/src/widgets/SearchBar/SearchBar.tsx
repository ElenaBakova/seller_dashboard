import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({setSearchQuery}) => (
    <form>
        <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery((e.target as HTMLInputElement).value.toLowerCase());
            }}
            variant="outlined"
            placeholder="Поиск по названию"
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{fill: "blue"}}/>
        </IconButton>
    </form>
);

export default SearchBar;