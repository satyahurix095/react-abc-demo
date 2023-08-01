import "./App.css";
const peopleData = [{name: "Damon 🎶🎶",src: "https://e0.pxfuel.com/wallpapers/52/1008/desktop-wallpaper-damon-salvatore.jpg",},{name: "Stephen 🎶🎶",src: "https://upload.wikimedia.org/wikipedia/en/4/4b/Stefan_Salvatore.png"},{name: "Matt 🎶🎶",src: "https://m.media-amazon.com/images/M/MV5BMjE2NDYwMzIwNl5BMl5BanBnXkFtZTcwMDYyMjM5OA@@._V1_.jpg",},];
export default function App() {
  return (
    <div className="App">
      {peopleData.map((person)=> (<Wel name ={person.name} src = {person.src}/>))}
    </div>
  );
}

function Wel({name,src}) {
 
  return (
    <div className= "cont">
      <img src={src}/>
      <h3><span>Hello</span>, {name}</h3>
    </div>
  );
}