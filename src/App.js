import { useEffect, useState } from "react";
import Container from "./Components/Container/Container";
import SearchForm from "./Components/SeacrhFrom/SearchForm";
import { ToastContainer } from "react-toastify";
import fetchWeather from "./services/weatherAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <Container>
      <ToastContainer autoClose={2000} position="bottom-left" theme="colored" />
      <SearchForm />
    </Container>
  );
};

export default App;
