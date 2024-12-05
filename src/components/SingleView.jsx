import React from 'react'
import defPoster from '../assets/images/batman.jpg'
function SingleView() {
  return (
    <div>

        <div className="row">
            <div className="col-12">
                <div className="card p-3 my-3">
                    <div className="poster">
                        <img src={defPoster} alt="" />
                    </div>
                    <div className="movieDetails">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleView