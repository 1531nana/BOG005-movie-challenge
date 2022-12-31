import searchImg from "../../resources/search.png";
import './style.css';

interface InputSearch {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  pages: number;
  request: (search: string, pages: number) => {};
}

export const Search = ({
  handleInput,
  search,
  pages,
  request,
}: InputSearch) => {

  return(
    <>
    {
      <div className="containerInput">
      
      <input 
        type="search"
        placeholder="Search"
        className="form-control inputBuscar"
        aria-label="Search"
        onChange={handleInput}
        value={search}
      />
      <img
        src={searchImg}
        alt=""
        className="search"
        onClick={(e) => {
          e.preventDefault()
          request(search, pages)
        }}
      />
      </div>
    }
    </>
  )
};
