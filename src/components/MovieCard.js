import {React,useEffect,useState} from 'react'
import './MovieCard.css'

export default ({items}) => {

    const [thisKey,setCurrentKey] = useState(null);

    function handleMouseHover(key){
      setCurrentKey(key);
    }

    function handleMouseOut(){
        setCurrentKey(null);
    }

    return(

        <div>
            {items.results.length > 0 && items.results.map((item , key) =>(

                <div className="movieCard">

                    {key === thisKey ?
                        
                        <div key={key}   onMouseOver={() => handleMouseHover(key)} onMouseOut={() => handleMouseOut()}> 
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            <div className="movieCard--buttons">
                                <button>
                                    teste
                                </button>
                            </div>
                        </div>
                        
                        :

                        <div key={key} onMouseOver={() => handleMouseHover(key)} onMouseOut={() => handleMouseOut()}> 

                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
        
                        </div>                               
                    }

                </div>
          
            ))}
        </div>   
    );
}