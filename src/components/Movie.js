export default function Movie({movie, setMovieSelected, setShowModal, setModalLoading}){

    const modalCreate = () => {
        setMovieSelected(movie.id)
        setShowModal(true)
        setModalLoading(true)
    }

    return(
        <div className="flex flex-col w-48" onClick={modalCreate}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="aspect-[9/16] object-cover rounded-lg hover:object-contain cursor-pointer" />
            <p className="font-semibold text-center">{movie.title}</p>
        </div>
    );
}