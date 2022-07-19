import Movie from "./Movie";
import MovieListLoader from './loaders/MovieListLoader';

export default function MoviesList({title, movies, setMovieSelected, setShowModal, setModalLoading, movieListLoading}){
    if(movieListLoading){
        return MovieListLoader();
    }else{
        return(
            <div className="flex flex-col mt-9">
                <h4 className="mb-4">{title}</h4>
                <div className="flex flex-row w-full justify-between">
                    {movies.map((movie)=>{
                        return(
                            <Movie 
                                movie={movie}
                                key={movie.id}
                                setMovieSelected={setMovieSelected}
                                setShowModal={setShowModal}
                                setModalLoading={setModalLoading}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}