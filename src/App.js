import MoviesList from "./components/MoviesList";
import Modal from "./components/Modal";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function App() {
  const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w'
  
  const [bilboard, setBilboard] = useState([]);
  const [rated, setRated] = useState([]);
  const [news, setNews] = useState([]);

  const [movieSelected,setMovieSelected] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [movieListLoading, setMovieListLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      const filterMovies = res.data.results.slice(0, 4);
      setBilboard(filterMovies);
      setMovieListLoading(false)
    })
    .catch(e => {
        console.error(e);
    })
  }, []);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      const filterMovies = res.data.results.slice(0, 4);
      setRated(filterMovies);
    })
    .catch(e => {
        console.error(e);
    })
  }, []);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      const filterMovies = res.data.results.slice(0, 4);
      setNews(filterMovies);
    })
    .catch(e => {
        console.error(e);
    })
  }, []);

  return (
    <div className="w-full bg-slate-800 p-space">
      <Modal 
        showModal={showModal}
        movieSelected={movieSelected}
        setShowModal={setShowModal}
        token={token}
        modalLoading={modalLoading}
        setModalLoading={setModalLoading}
      />
      <h1 className="text-primary font-bold">FOL<span className="text-secondary font-light">MOVIES</span></h1>
      <MoviesList
        title="En cartelera"
        movies={bilboard}
        setMovieSelected={setMovieSelected}
        setShowModal={setShowModal}
        setModalLoading={setModalLoading}
        movieListLoading={movieListLoading}
      />
      <MoviesList
        title="Mejor valoradas"
        movies={rated}
        setMovieSelected={setMovieSelected}
        setShowModal={setShowModal}
        setModalLoading={setModalLoading}
        movieListLoading={movieListLoading}
      />
      <MoviesList
        title="Proximos estrenos"
        movies={news}
        setMovieSelected={setMovieSelected}
        setShowModal={setShowModal}
        setModalLoading={setModalLoading}
        movieListLoading={movieListLoading}
      />
    </div>
  )
}

