import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    
    let substring = item.overview.substring(0,300).lastIndexOf('.');
    let itemOverview = '' ; 

    if(substring < 0){
        itemOverview = item.overview.substring(item.overview.substring(0,300).lastIndexOf(','), -item.overview.length) + '...';
    }else{
       itemOverview = item.overview.substring(substring,-item.overview.length) + '...';
    }
 

    for (let i  in  item.genres) {
        genres.push(item.genres[i].name);     
    }

    return(
       <section className="featured" style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }}>
           <div className="featured--vertical">
               <div className="featured--horizontal">
                   <div className="featured--name">
                       {item.original_name}
                   </div>
                   <div className="featured--info">
                        <div className="featured--points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Teporada{
                        item.number_of_seasons !== 1 && `s`}</div>
                   </div>
                   <div className="featured--description">{itemOverview}</div>
                   <div className="featured--buttons">
                       <a className="featured--watchbutton" href={`/watch/${item.id}`}>► Assistir</a>
                       <a className="featured--mylistbutton" href={`/list/add${item.id}`}>+ Minha Lista</a>
                   </div>
                   <div className="featured--genres"><strong>Generos:</strong>{genres.join(', ')}</div>
                </div> 
               </div>
       </section>
    );
}