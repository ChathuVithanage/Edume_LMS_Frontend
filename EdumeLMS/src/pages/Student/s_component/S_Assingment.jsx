import React, { useEffect, useState } from 'react';
import axios from 'axios';

const S_Assingment = () => {
  const [pdfs, setPDFs] = useState([]);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await axios.get('http://localhost:3002/Assignment/pdfs');
        console.log(response.data)
        setPDFs(response.data);
      } catch (error) {
        console.error('Error fetching PDFs:', error);
      }
    };
    fetchPDFs();
  }, []);

  return (
    <div className='h-screen'>
      <h2>PDF List</h2>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf._id}>
            <a href={`http://localhost:3002/files/${pdf.filename}`} download>{pdf.filename}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default S_Assingment;
