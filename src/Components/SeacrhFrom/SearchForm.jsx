import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { BsFillBrightnessLowFill } from "react-icons/bs";

const SearchForm = () => {
  return (
    <Navbar style={{ justifyContent: "center" }}>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search a city..."
          className="me-2"
          size="lg"
          aria-label="Search"
        />
        <Button variant="outline-info">
          <BsFillBrightnessLowFill
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "20px",
              height: "20px",
            }}
          />
        </Button>
      </Form>
    </Navbar>
  );
};

export default SearchForm;
