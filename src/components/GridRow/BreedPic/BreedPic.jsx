import './BreedPic.css'
import { useState, useEffect } from 'react';
export default function BreedPic({name}){
    
    const [imageSrc, setImageSrc] = useState(`/src/assets/dog_pics/${name}.webp`);

    // useEffect to listen to change in {name} when the grid is ordered
    useEffect(() => {
      const img = new Image();  
      img.onload = () => {
        setImageSrc(`/src/assets/dog_pics/${name}.webp`); 
      };
      img.onerror = () => {
        setImageSrc('/src/assets/dog_pics/dog-paw.webp');  // default image
      };
      img.src = `/src/assets/dog_pics/${name}.webp`;  
    }, [name]);
    
    return <>
    <div className="thumbnail-container">
        <img
          src={imageSrc}
          alt={name}
          className="thumbnail"
        />
        <p className="label">{name}</p>
      </div>
    </>
}