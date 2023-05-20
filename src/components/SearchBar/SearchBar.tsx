import React, {useState} from "react";
import "./SearchBar.scss";
import {TextField} from "@mui/material";

interface Props {
    onChange: (term: string) => void;
}

const SearchBar = ({onChange}: Props) => {
    const [term, setTerm] = useState<string>("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let trm = e.target.value;
        setTerm(trm);
        onChange(trm);
    };
    return (
        <div className="search-box-container">
            <TextField className="search" label="Search" variant="outlined" value={term}
                       onChange={e => onInputChange(e)}/>
        </div>
    );
};

export default SearchBar;
