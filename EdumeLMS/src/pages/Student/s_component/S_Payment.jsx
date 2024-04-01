import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  //const [email, setEmail] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); 
  };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };


  const handleUpload = async () => {
    if (!file ) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    

    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1]; // Extract base64 image data
      
      try {
        await axios.post('http://localhost:3002/Payment/upload', {   image: base64Image }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // Handle success
        console.log('Image uploaded successfully');
        alert('Payment uploaded successfully');
      } catch (error) {
        // Handle error
        console.log(error)
        console.error('Error uploading image:', error);
      }
    };
  };

  return (
    <div className='h-screen'>

        <div className='flex justify-center mt-24'><h1>Upload your Payment Slip...</h1></div>

        {/* <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            /> */}


        <div class="col-span-full flex justify-center m-20">

        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-96">
            <div class="mt-4 flex text-sm leading-6 text-gray-600  justify-center flex-col">
                
                <input type="file" onChange={handleFileChange} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8' onClick={handleUpload}>Upload Image</button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ImageUpload;
