import { useEffect, useState } from "react";
import fetchWeather from "./services/weatherAPI";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
