import { useState } from "react";
import "./App.css";
const peopleData = [{name: "Damon 🎶🎶",src: "https://e0.pxfuel.com/wallpapers/52/1008/desktop-wallpaper-damon-salvatore.jpg",},{name: "Stephen 🎶🎶",src: "https://upload.wikimedia.org/wikipedia/en/4/4b/Stefan_Salvatore.png"},{name: "Matt 🎶🎶",src: "https://m.media-amazon.com/images/M/MV5BMjE2NDYwMzIwNl5BMl5BanBnXkFtZTcwMDYyMjM5OA@@._V1_.jpg",},];
export default function App() {
  return (
    <div className="App">
      {peopleData.map((person)=> (<Wel name ={person.name}src= {person.src}/>))}
    </div>
  );
}

function Wel({name,src}) {
 
  return (
    <div className= "cont">
      <img src={src}/>
      <h3><span>Hello</span>, {name}</h3>
      <Count />
      <ColorGame />
    </div>
  );
}

function Count(props){
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);
  
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(disLike + 1)}>👎 {disLike}</button>
      {like >= disLike + 10  ? (<h4>your Cool</h4>) : null}
      
      <p><label for="file">likes and Dislikes</label><br/>
      <progress completed = {like} bgColor = "red"></progress></p>
      <p>the worst actor in existence is jayam Ravi</p>
    </div>
  )
}
function ColorGame() {
    const [bg, setbgcol] = useState("black");
    const styles = {
        background: bg,
        };
          return (
          <div>
            <input
                style={styles}
                onChange={(event) => setbgcol(event.target.value)}
                type="text"
                placeholder="please type a color"
                value = {bg}
            />
  </div>
  );
 }



