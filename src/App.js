import { useState, useEffect } from 'react';
import Formulario from "./component/Formulario";
import ListImg from './component/ListImg';

function App() {

  const [ search, setSearch ] = useState('');  
  const [ images, setImages ] = useState([]);  
  const [ page, setPage ] = useState(1);
  const [ total, setTotal ] = useState(1);

  useEffect(() => {
    const getApi = async () => {
      if(search === '') return;

      const pagination = 30;
      const APIKEY = '19366708-5a5d9ee3e2ea9e1babdf933cf';
      const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${search}&per_page=${pagination}&page=${page}`;

      const res = await fetch(URL);
      const data = await res.json();

      setImages(data.hits);   
      
      const totalPages = Math.ceil(data.totalHits / pagination);
      setTotal(totalPages);

      // Mover la pantalla al inicio
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: 'smooth'});
    }

    getApi();

  },[search, page]);

  const previous = () => {
    const newPage = page - 1;

    if(newPage === 0) return;    
    setPage(newPage);
    
  }
  
  const next = () => {
    const newPage = page + 1;

    if(newPage > total) return;    
    setPage(newPage);

  }

  return (
    <div className="container">      
      <div className="jumbotron">
        <p className="lead text-center text-primary display-4">Buscador de imágenes</p>
        <Formulario setSearch={setSearch}/>        
      </div>     

      <div className="row justify-content-center">
        <ListImg images={images}/>

        { (page === 1) ? null : 
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={previous}
            >
                &laquo; Anterior
            </button>
        }
        { (page === total) ? null :
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={next}
            >
                Siguiente &raquo;
            </button>
      }
      </div>
    </div>
  );
}

export default App;
