import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../Utils/axios.js';
import consts from '../../Utils/consts';
import Chip from '@mui/material/Chip';

function DetailedHero() {
  const params = useParams();

  const [heroDetails, setHeroDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`?apikey=${consts.API_KEY}&type=movie&i=${params.heroID}`)
      .then((res) => {
        setHeroDetails(res.data);
      });
  }, []);

  return (
    <>
      <h1>
        {heroDetails.Title}{' '}
        <Chip label={heroDetails.Released} color="primary" sx={{ mr: 1 }} />
        <Chip label={heroDetails.Genre} color="primary" />
      </h1>

      <img src={heroDetails.Poster} alt={heroDetails.Titl} loading="lazy" />

      <div>
        <b>Actors:</b> {heroDetails.Actors}
      </div>
      <div>
        <b> Writer: </b> {heroDetails.Writer}
      </div>
      <p>{heroDetails.Plot}</p>
    </>
  );
}

export default DetailedHero;
