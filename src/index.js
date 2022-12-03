import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [selectedImageData, setSelectedImageData] = useState('')
  const [imageURL, setImageURL] = useState('');
  
  const fileReader = new FileReader();
  
  if (selectedImageData) {
    fileReader.readAsDataURL(selectedImageData);
  }
  fileReader.addEventListener('load', () => {
    setImageURL(fileReader.result)
  })
  
  return (
    <div>
      <input 
        type='file' 
        // ref={el => setSelectedImageFile(el)} 
        onChange={ev => setSelectedImageData(ev.target.files[0])}
      />
      {
        !!imageURL && <img src={imageURL} />
      }
    </div>
  )
}

const containter = document.querySelector('#container');
const root = createRoot(container);
root.render(<App/>)
