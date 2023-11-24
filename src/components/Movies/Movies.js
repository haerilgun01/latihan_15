import Movie from "../Movie/Movie";
import styled from "styled-components";

const Movies = (props) => {
  const { data, title } = props;

  return (
    <Container>
      <section className="movies">
        <h2 className="movies__title">{title}</h2>
        <div className="movie__container">
          {data.map(function (data) {
            return (
              <Movie
                key={data.id}
                item={data}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  /* Small Screen */
  margin: 1rem;

  .movies {
    margin: 5rem 0;
    text-align: center;
  }

  .movies__title {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #b81d24;
  }

  .movie__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .movie__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    .movies__title {
      margin-bottom: 3rem;
      font-size: 3rem;
    }
  }
`;

export default Movies;
