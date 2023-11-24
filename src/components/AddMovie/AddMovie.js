import React, { useState } from "react";
import DataGenre from "../../utils/constants/DataGenre";
import Alert, { showAlert } from "../Modal/Alert/Alert";
import DateInput from "../Modal/DateInput/DateInput";
import { format } from "date-fns";
import id from "date-fns/locale/id";
import Button from "../Navbar/ui/Button"
import styled from "styled-components"; 

const AddMovie = (props) => {
  const { movie, setMovie } = props;

  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [genreError, setGenreError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || genre === "" || imageUrl === "" || date === "" ) {
      showAlert.error("Kolom tidak boleh kosong");
    } else {
      const formattedDate = date
        ? format(date, "dd MMMM yyyy", { locale: id })
        : "";

      const newMovie = {
        id: movie.length + 1,
        title: title,
        image: imageUrl,
        genre: genre,
        date: formattedDate,
      };
      setMovie([...movie, newMovie]);
      setTitle("");
      setImageUrl("");
      setGenre("");
      setDate(null);
      setTitleError(false);
      setImageError(false);
      setGenreError(false);
      setDateError(false);
      showAlert.success("Berhasil Menambahkan Movie");
    }
  };

  return (
    <Container>
      <Alert />
      <form className="addmovie" onSubmit={handleSubmit}>
      <h2 className="title">Tambahkan Movie Baru</h2>
        <div className="inputContainer">
          <label className="inputLabel" htmlFor="title">
            Judul:
          </label>
          <input
            className="addmovie__input"
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Isi judul sesuai Movie"
          />
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="imageUrl">
            Image URL:
          </label>
          <input
            className="addmovie__input"
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={handleImageUrl}
            placeholder="Isi Image URL"
          />
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="genreSelect">
            Genre:
          </label>
          <select
            className="genreSelect"
            id="genreSelect"
            value={genre}
            onChange={handleGenre}
          >
            {DataGenre.map((genreOption, index) => (
              <option key={index} value={genreOption}>
                {genreOption}
              </option>
            ))}
          </select>
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="date">
            Tanggal Rilis:
          </label>
          <DateInput date={date} setDate={setDate} onChange={handleDate} />
        </div>

        <Button variant="secondary">Simpan</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #b81d24;
}

.addmovie {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  background-color: #221f1f;
  border: 2px solid darkred;
  max-width: 100%;
  margin: 0 auto;
  width: 660px;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
  width: 100%;
}

.inputLabel {
  color: #b81d24;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.addmovie__input {
  font-family: "Lexend", sans-serif;
  width: 90%;
  padding: 8px;
  border-radius: 5px;
  margin: 0.5rem 0;
  background-color: #333;
  color: white;
  border: 1px solid #666;
}

.genreSelect {
  font-family: "Lexend", sans-serif;
  width: 93%;
  padding: 8px;
  border-radius: 5px;
  margin: 0.5rem 0;
  background-color: #333;
  color: white;
  border: 1px solid #666;
}

.addmovie__button {
  font-family: "Lexend", sans-serif;
  background-color: #b81d24;
  color: white;
  margin: 1rem 0;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.addmovie__button:hover {
  background-color: #8c141b;
}

@media (min-width: 768px) {
    margin: 100px auto;
}
`



export default AddMovie;
