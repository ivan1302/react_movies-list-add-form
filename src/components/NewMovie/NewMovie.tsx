import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [infoTitle, setInfoTitle] = useState('');
  const [infoDescription, setInfoDescription] = useState('');
  const [infoImageURL, setInfoImageURL] = useState('');
  const [infoImdbURL, setInfoImdbURL] = useState('');
  const [infoImdbID, setInfoImdbID] = useState('');
  const [count] = useState(() => Math.random().toFixed(16).slice(2));

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoTitle(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoDescription(e.target.value);
  };

  const handleChangeImageURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoImageURL(e.target.value);
  };

  const handleChangeImdbURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoImdbURL(e.target.value);
  };

  const handleChangeImdbID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoImdbID(e.target.value);
  };

  const possibilityToAdd =
    infoTitle.trim() !== '' &&
    infoImageURL.trim() !== '' &&
    infoImdbURL.trim() !== '' &&
    infoImdbID.trim() !== '';

  const handleAddMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMovie: Movie = {
      title: infoTitle,
      description: infoDescription,
      imgUrl: infoImageURL,
      imdbUrl: infoImdbURL,
      imdbId: infoImdbID,
    };

    onAdd(newMovie);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleAddMovie}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={infoTitle}
        onChange={handleChangeTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={infoDescription}
        onChange={handleChangeDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={infoImageURL}
        required
        onChange={handleChangeImageURL}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={infoImdbURL}
        required
        onChange={handleChangeImdbURL}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={infoImdbID}
        required
        onChange={handleChangeImdbID}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!possibilityToAdd}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
