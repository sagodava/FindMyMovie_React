import React, { Component } from 'react'
import MoviesList from "./MoviesList";
import MovieCreate from "./MovieCreate";
import MovieSearch from "./MovieSearch";
import MovieUpdate from "./MovieUpdate";
import MovieDelete from "./MovieDelete";
export class MoviesIndex extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To <span>FindMyMovies</span></h1>
        <ul class="nav nav-tabs">
                <li><a href="#list" data-toggle="tab">List</a></li>
                <li><a href="#select" data-toggle="tab">Search Movie</a></li>
                <li><a href="#add" data-toggle="tab">Add Movie</a></li>
                <li><a href="#update" data-toggle="tab">Update Movie</a></li>
                <li><a href="#delete" data-toggle="tab">Delete Movie</a></li>
            </ul>
            
            <div class="tab-content">
                <div id="list" class="tab-pane fade">
                <MoviesList/>
                </div>
                <div id="select" class="tab-pane fade">
                <MovieSearch/>
                </div>
                <div id="add" class="tab-pane fade">
                <MovieCreate/>
                </div>
                <div id="update" class="tab-pane fade">
                <MovieUpdate/>
                </div>
                <div id="delete" class="tab-pane fade">
                <MovieDelete/>
                </div>

                </div>

      </div>
    )
  }
}

export default MoviesIndex;
