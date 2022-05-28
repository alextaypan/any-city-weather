import { useState } from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.info("Please enter a city name for searching!");
    }
    onHandleSubmit(query);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Navbar style={{ justifyContent: "center" }}>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search a city..."
          className="me-2"
          size="lg"
          aria-label="Search"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <Button variant="outline-info" type="submit">
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

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
