import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { PrimaryButton } from "../components/Navbar/ui/Button";
import styled from "styled-components";
import GetDataUpcoming from "../utils/networks/GetDataUpcoming";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);

  const getData = async (pageNum) => {
    const data = await GetDataUpcoming(pageNum);
    setMovies(data.results);
  };

  const handleNext = () => {
    setPages(pages + 1);
  };

  const handleBefore = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  };

  useEffect(() => {
    getData(pages);
  }, [pages]);

  return (
    <div>
      <Hero />
      <Movies data={movies} title={"Upcoming Movies"} />
      <ButtonStyle>
        <PrimaryButton onClick={handleBefore} variant="primary">
          Back
        </PrimaryButton>
        <PrimaryButton onClick={handleNext} variant="primary">
          Next
        </PrimaryButton>
      </ButtonStyle>
    </div>
  );
};

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export default Upcoming;
