import React, { useState } from "react";
import { useEffect, useRef } from "react";
import banner from "../assets/images/batman.jpg";
import axios from "axios";
import SingleView from "./SingleView";
function Card({searchTerm}) {

    const [searchData, setSearchData] = useState([]);

    const [movieId, setMovieId] = useState(null);
    const handleMovieId = (id)=>{
      setMovieId(id)
      console.log("setMovieId", id);
    }

    console.log('search param', searchTerm)
    
    useEffect(()=>{

        const apiCall = async()=>{
            const response = await axios.get(`http://www.omdbapi.com/?apikey=c9123a6b&s=${searchTerm}`)
            setSearchData(response.data.Search || [])
        }

        apiCall();
    },[searchTerm]);

    console.log('search data',searchData)



  return (
    <div>


        <SingleView movieId={movieId} />


      <div className="row">


        {
            searchData.map((data)=>{
                return (
                    <div className="col-4 mt-2">
          <div className="card shadow ">
            <div className="card-img">
              <img src={data.Poster} alt="" />
            </div>
            <div className="card-body">
              <h4 
              onClick={()=>{handleMovieId(data.imdbID)}}
              className="card-title fw-bold cursor-pointer">{data.Title}</h4>
              <p>
              <b>Year: {data.Year}</b> &nbsp;
              <b>Type: {data.Type}</b>
              </p>
            </div>
          </div>
        </div>
                )
            })
        }

      </div>
    </div>
  );
}

export default Card;
