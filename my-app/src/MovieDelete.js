import React from "react";

class MovieDelete extends React.Component{
    url=" http://localhost:3000/movies";
    state={s:{id:"",name:"",hero:"",rating:""}};
    id=React.createRef();
    name=React.createRef();
    hero=React.createRef();
    rating=React.createRef();
    deleteMovie(){
        var id=Number(this.id.current.value);
        var url=`${this.url}/${id}`;
        fetch(url,{method:'DELETE'})
        .then( ()=>alert("Row deleted succesfully"))
        .catch(err=>alert("Error"+err));
    }
    
  render(){
     
       return <div>
            <h1>Movie Delete</h1>
            <table border="1">
                <tr>
                    <td> Movie ID</td> <td><input type="number" 
                    ref={this.id}/></td>
                    <button onClick={()=>this.deleteMovie()}>Delete Movie</button>
                </tr>
                
            </table>
        </div>
    }
}
export default MovieDelete;