import React from "react";

class MovieUpdate extends React.Component{
    url=" http://localhost:3000/movies";
    state={s:{id:"",name:"",hero:"",rating:""}};
    id=React.createRef();
    name=React.createRef();
    hero=React.createRef();
    rating=React.createRef();
    updateMovie(){
        var id=Number(this.id.current.value);
        var s={
            id:id,
            name:this.name.current.value,
            hero:this.hero.current.value,
            rating:Number(this.rating.current.value)
        };
        var url= `${this.url}/${id}`;
        fetch(url,{method:'PUT',headers:{'Content-Type':'Application/json'},body:JSON.stringify(s)})
            .then(()=>alert("Row added Succesfully"))
            .catch(err => alert("Error"+err));

    }
  render(){
     
       return <div>
            <h1>Movie Update</h1>
            <table border="1">
                <tr>
                    <td> Movie ID</td> <td><input type="number" 
                    ref={this.id}/></td>
                    <button onClick={()=>this.updateMovie()}>Update Movie</button>
                </tr>
                <tr>
                    <td>Movie Name</td> <td><input type="text" ref={this.name} /></td>
                    
                    
                </tr>
                <tr>
                    <td>Hero Name</td> <td><input type="text" ref={this.hero}/></td>
                    
                   
                </tr>
                <tr>
                    <td>Rating</td> <td><input type="number" ref={this.rating} /></td>
                    
                    
                </tr>
            </table>
            

        </div>
    }
}
export default MovieUpdate;