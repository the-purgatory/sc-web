import { useState, useEffect } from 'react';

const getDataUrl = (img) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  // If the image is not png, the format
  // must be specified here
  return canvas.toDataURL();
};

const useLoadImage = (src) => {
  const [imageURI, setImageURI] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const imageObj = new Image();
    imageObj.src = src;
    imageObj.onload = () => {
      setImageURI(imageObj.src);
    };
    imageObj.onerror = (err) => {
      setError(err);
    };
  }, [src]);

  return [imageURI, error];
};

export { getDataUrl, useLoadImage };
