import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { IFilm } from '../../swapi';
import Loading from '../Loading'

import './films.css'

const filmPosters = [
  {image: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
  {image: "https://i.etsystatic.com/16821137/r/il/1602c9/1893141549/il_570xN.1893141549_1gbe.jpg"},
  {image: "https://m.media-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg"},
  {image: "https://cdn.shopify.com/s/files/1/1057/4964/products/Star-Wars-Episode-1-The-Phantom-Menace-Vintage-Movie-Poster-Original-Japanese-1-Panel-20x29.jpg?v=1643173296"},
  {image: "https://m.media-amazon.com/images/I/61zAkpvYLqL._AC_SY741_.jpg"},
  {image: "https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_SY741_.jpg"},
]

function getFilms(): Promise<IFilm []> {
  return fetch('https://swapi.dev/api/films/')
  .then(res => res.json())
  .then(res => {
    return res.results as IFilm[]
  })
}

const Films = (props: IFilm) => {

  const [movies, setMovies] = useState<IFilm[] | null>(null);
  const [seachTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await getFilms();
      setLoading(false);
      setMovies(movieList);
      console.log(movieList)
    };
    fetchMovies()
  },[])

  return (
    <>
    <div className={'page-header_div'}>
      <h1 className={'page-header'}>Films</h1>
      <input
      id={'search'}
      placeholder={'Find a film...'}
      type={'search'}
      onChange={(event) => {
        setSearchTerm(event.target.value)
      }}
      />
    </div>

    <div className={'films-container'}>
      {loading ? (
      <Loading />
      ) : (
        movies && movies.filter((film) => {
          if(seachTerm === ''){
            return film
          } else if(film.title.toLowerCase().includes(seachTerm.toLowerCase())){
            return film
          }
        }).map((film, index) => (
          <div key={index} className={'film-card'}>
            <div className={'poster-container'}>
              <img src={filmPosters[index].image} className={'poster'} alt={'poster'} />
            </div>
            <div className={'details-container'}>
              <h2 className={'film-title'}>{film.title}</h2>
              <p className={'episode-id'}>Episode {film.episode_id}</p>
              <p className={'director-name'}>Directed By: {film.director}</p>
              <Link className={'header_page-link'} to={`/films/${film.url.split('/')[5]}`}>Details</Link>
            </div>
          </div>
          )
        )
      )}
    </div>
    </>
  )
}

export default Films