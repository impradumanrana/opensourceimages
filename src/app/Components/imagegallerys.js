import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const pixbayapi = process.env.PIXBAYAPIKEY;

async function getdefaultData() {
  try {
    const res = await fetch(`https://pixabay.com/api/?key=39125237-7b49e4a113eae3c31364daa67&q=&image_type=all&order=popular`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const datadefault = await getdefaultData();
      if (datadefault) {
        setImages(datadefault.hits);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="columns-2 md:columns-3">
      {images.length > 0 ? (
        images.map((item) => (
          <div key={item.id} className='w-full  py-3'>
            <Image src={item.webformatURL} width={item.webformatWidth} height={item.webformatHeight} alt={item.tags} className='object-cover rounded-md mx-auto' />
          </div>
        ))
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
