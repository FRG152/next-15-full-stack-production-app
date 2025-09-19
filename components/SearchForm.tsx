import Form from "next/form";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        className="search-input"
        placeholder="Search Startups"
        defaultValue={query}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="text-white search-btn">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
