// import React from 'react'
import React, { useEffect,useState } from 'react'
import defPoster from '../assets/images/batman.jpg'
import axios from 'axios';
function SingleView({movieId}) {

    console.log('selected movie id ', movieId)

    const [movieDetails,setMovieDetails] = useState([]);
    useEffect(()=>{
        if(!movieId) return;
        const apiCall = async ()=>{
            const response = await axios.get( `http://www.omdbapi.com/?apikey=c9123a6b&i=${movieId}`);
            setMovieDetails(response.data);
            console.log('this is ',response.data);
        }
        apiCall();
    },[movieId]);

    if( ! movieId  ){
        return 
    }


  return (
    <div>

    

        <div className="row">
            <div className="col-12">
                <div className="card p-3 my-3 d-flex justify-content-center gap-3 flex-row">
                    <div className="poster">
                        <img src={movieDetails.Poster} className='img-fluid' alt="" />
                    </div>
                    <div className="movieDetails">
                    <h2 className='fw-bold'>{movieDetails.Title}</h2>
                    <p><span>Year</span>: {movieDetails.Year} <span>Type</span>: {movieDetails.Type}</p>
                    <p>
                        {movieDetails.Plot}
                    </p>
                    <button className=' btn btn-warning'>
                        {movieDetails.imdbRating}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleView