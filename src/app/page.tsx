import SearchBar from "./_ui/nav/SearchBar";

export interface ISearchBar {
  search_label: string;
}

export default function Home() {
  return (
    <nav className="flex flex-col items-center justify-between p-24">
      <SearchBar search_label={"Vademecum - Main Search"} />
    </nav>
  );
}
