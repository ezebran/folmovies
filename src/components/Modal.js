import { useState, useEffect } from 'react';
import axios from 'axios';
import ModalLoader from './loaders/ModalLoader';

export default function Modal({showModal, movieSelected, setShowModal, token, modalLoading, setModalLoading}){

    const [modalMovie, setModalMovie] = useState([]);

    useEffect(() => {
        if(movieSelected){
            axios.get(`https://api.themoviedb.org/3/movie/${movieSelected}`, {
                headers: {
                    'Authorization': token
                }
            })
            .then(res => {
                setModalMovie(res.data);
                setModalLoading(false);
            })
            .catch(err => console.error(err))
        }
    }, [movieSelected]);

    if(modalLoading){
        return ModalLoader()
    }else{
        return(
            <div className={`fixed h-screen w-full bg-neutral-800/[.8] flex justify-center items-center ${!showModal ? 'hidden' : ''}`}>
                <div className="relative w-min-[32rem] h-min-[32rem] gap-4 bg-slate-100 rounded-lg p-4 flex flex-row justify-center items-center">
                    <span className="absolute bg-slate-100 font-bold right-[-60px] top-[0px] py-[0.5em] px-[0.92em] rounded-full cursor-pointer hover:bg-slate-300" onClick={() => setShowModal(false)}>X</span>
                    <img src={`https://image.tmdb.org/t/p/original/${modalMovie.poster_path}`}  className="w-52 aspect-[9/16] object-cover rounded-lg" />
                    <div className="flex flex-col w-60 gap-6">
                        <h5 className="font-bold text-slate-600">{modalMovie.title}</h5>
                        <p className="text-slate-600 max-h-36 overflow-hidden">
                            <span className="font-semibold text-slate-800 ">Titulo original:</span> {modalMovie.original_title}
                        </p>
                        <p className="text-slate-600 max-h-36 overflow-hidden">
                            <span className="font-semibold text-slate-800 ">Descripción:</span> {modalMovie.overview}
                        </p>
                        <p className="text-slate-600">
                            <span className="font-semibold text-slate-800">Lanzamiento:</span> {modalMovie.release_date}
                        </p>
                        <p className="text-slate-600">
                            <span className="font-semibold text-slate-800">Duración:</span> {modalMovie.runtime} minutos
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}