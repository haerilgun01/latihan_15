import React, { useEffect, useState } from "react";
import Button from "../Navbar/ui/Button";

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  const [movie, setMovie] = useState({});

  async function getDataApi() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(function () {
    getDataApi();
  }, []);

  return (
    <Stack
      m={"0 auto"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            color={"red.600"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            <Text color={"#b81d24"} as={"span"}>
              {movie.Title}
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"red.700"}>
            {movie.Genre}
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {movie.Plot}
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"red.700"}>
            {movie.Writer}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button variant="primary">Watch</Button>
            <Button variant="secondary">Trailer</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Image
          alt={"Image"}
          height={{ base: "", md: "", lg: "500px" }}
          width={"auto"}
          objectFit={"cover"}
          borderRadius={"25px"}
          src={movie.Poster}
        />
      </Flex>
    </Stack>
  );
};

export default Hero;
