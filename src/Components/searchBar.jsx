import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    return (
        <form
            className="d-flex ms-lg-3 mt-3 mt-lg-0"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="form-control border-black"
                placeholder="جستجو خبر"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onSearch(e.target.value);
                }}
            />

            <button className="btn ms-2" type="submit">
                <Search />
            </button>

            {query && (
                <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() => {
                        setQuery("");
                        onSearch("");
                    }}
                >
                    ×
                </button>
            )}
        </form>
    );
};

export default SearchBar;