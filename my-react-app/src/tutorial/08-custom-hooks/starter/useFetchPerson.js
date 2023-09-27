import { useState } from "react";

const useFetchPerson = (defaultValue) => {
  const [isLoading, setIsLoading] = useState(defaultValue);
  const [isError, setIsError] = useState(defaultValue);
  const [user, setUser] = useState(defaultValue);

  return { isLoading, isError, user };
};

export default useFetchPerson;
