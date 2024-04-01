import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord, faFile } from '@fortawesome/free-solid-svg-icons';

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

  const getFileIcon = (fileExtension) => {

    if (typeof fileExtension !== 'string') {
      // Handle the case where fileExtension is not a string
      return null; // Return null or some default value
    }
  
    switch (fileExtension.toLowerCase()) {
      
      case 'pdf':
        return <FontAwesomeIcon icon={faFilePdf} />;
      case 'doc':
      case 'docx':
        return <FontAwesomeIcon icon={faFileWord} />;
      default:
        return <FontAwesomeIcon icon={faFile} />;
    }
  };

  return (
    <div className='h-screen p-3'>

      <div className='flex p-3 justify-start flex-wrap '>
      <h2 className='mt-20 ml-8 text-lg'>Assignments List</h2>
      
      <div className=' mt-2'>
      <ul className=' '> 
        {pdfs.map((pdf) => (
          
          <li className='my-8 mx-10 bg-slate-100 w-7/8 p-3 rounded-md' key={pdf._id}>
             <h4 className='pl-8'>Description : {pdf.title}</h4>
             
             {getFileIcon(pdf.fileExtension)}

             <button className=' mx-4 my-2 bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold'>
             <a href={`http://localhost:3002/files/${pdf.filename}`} download>View Assignment</a>
             </button>

             <button onClick={() => (window.location.pathname = "/s_dashbord/s_assingmentPage/s_UploadAssignmentWork")} className=' mx-20 border-2 border-green-700 px-3 py-1 rounded-lg'>Upload Your work</button>
          </li>
        ))}
        </ul>
        </div>
      
      </div>
    </div>
  );
};

export default S_Assingment;
