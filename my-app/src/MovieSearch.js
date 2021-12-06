import React from "react";

class MovieSearch extends React.Component{
    url="http://localhost:3000/movies";
    state={m:{id:"",name:"",hero:"",rating:""}};
    name=React.createRef();
    rating=React.createRef();
    id=React.createRef();
    hero=React.createRef();
    getmovies(){
        var id=Number(this.refs.id.value);
        var url=`${this.url}/${id}`
        fetch(url)
        .then(response=>response.json())
        .then(response=>this.setState({m:response}));
    }

    render(){
        var m=this.state.m;
        return <div>
            <h1>Getting Movie By ID</h1>

            <table border="1">
                <tr>
                    <td>ID</td> <td><input type="number" ref="id" /></td>
                    <button onClick={()=>this.getmovies()}>Search Movies</button>
                </tr>
                <tr>
                    <td>Movie Name</td> <td><input type="text" ref="name" value={m.name} /></td>
                    {/* <button>Add</button> */}
                </tr>
                <tr>
                    <td>Hero</td> <td><input type="text" ref="hero" value={m.hero} /></td>
                    {/* <button>Edit</button> */}
                </tr>
                <tr>
                    <td>Rating</td> <td><input type="number" ref="rating" value={m.rating} /></td>
                    {/* <button >Delete</button> */}
                </tr>

            </table>



            
        </div>
    }
}
export default MovieSearch;