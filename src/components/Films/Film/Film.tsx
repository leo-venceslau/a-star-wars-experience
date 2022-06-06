import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { IFilm } from '../../../swapi';
import Loading from '../../Loading';

import './film.css';


const Film = (props: IFilm) => {

  const [loading, setLoading] = useState(true);
  const { filmId } = useParams<{ filmId: string }>();
  const [film, setFilm] = useState<IFilm | null>(null);
  
  function getFilm(): Promise<IFilm > {
    return fetch(`https://swapi.dev/api/films/${filmId}/`)
    .then(res => res.json())
    .then(res => { 
      console.log(res)
      return res as IFilm
    })
  }


  useEffect(() => {
    const fetchFilm = async () => {
      const filmDetails = await getFilm();
      setLoading(false);
      setFilm(filmDetails);
    }
    fetchFilm()
  },[])

  return (
  <>
      <div className={'page-header_div'}>
        <h1 className={'page-header'}>{film?.title}</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className={'film-details'}>
          <h2>Episode {film?.episode_id}</h2>
          <p>Directed By: {film?.director}</p>
          <p>Produced By: {film?.producer}</p>
          <div className={'opening-crawl-div'}>
            <div className={'opening-crawl'}>
              <p>{film?.opening_crawl}</p>
            </div>
          </div>
        </div>
      )}
  </>

  )
}

export default Film