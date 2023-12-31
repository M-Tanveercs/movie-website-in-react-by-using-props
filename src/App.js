import './App.css';

import Header from './component/Header';
import Movie from './component/Movie';
import movie from'./movie.json';

function App() {

  return (
    <div className="App">
  
<Header/>
<div className="main">
  {
    movie.map((element)=>{
    return (

      <Movie 
      title={element.Title}
      year={element.Year}
      img={element.Poster}
/>
      ) 
    })
  }

</div>
 
    </div>
  );
}

export default App;
