import { Form } from "react-bootstrap";
import searchImg from "../../resources/search.png";

interface stateInputSearch {
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
}: stateInputSearch) => {
  return(
    <>
    {
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleInput}
          value={search}
        />
        <img
          src={searchImg}
          alt=""
          className="search"
          onClick={() => {
            request(search, pages)
          }}
        />
      </Form>
    }
    </>
  )
};
