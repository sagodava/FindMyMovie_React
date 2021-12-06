import React from "react";

class MoviesList extends React.Component{
    url=" http://localhost:3000/movies";
    state={movies:[]}
     getMovies(){
         fetch(this.url)
             .then(response=>response.json())
             .then(response=>this.setState({movies:response}));
     }
     hideMovies(){
         this.setState({movies:[]});
     }

    render(){
       
        return <div>
            <h1>Welcome</h1>
            <button onClick={()=>this.getMovies()}>Get Movies</button> |&nbsp; 
            <button onClick={()=>this.hideMovies()}>Hide Movies</button>
            <h1>List Of Movies

            </h1>
            <table className="table table-bordered">
            {/* <table class="table table-striped"> */}
                <thead>
                    <tr>
                        <th>ID</th>  <th>Movie name</th>  <th>Hero</th>  <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(x=><tr>
                        <td>{x.id}</td> <td>{x.name}</td> <td>{x.hero}</td> <td>{x.rating}</td>
                        </tr>)}
                </tbody>
            </table>

        </div>
    }
}
export default MoviesList;