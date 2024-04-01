import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';

function S_AssignmentWork() {

  const [title, setTitle] = useState("")
  const [file, setFile] = useState("")

  //form onsubmit
  const submitImage = async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file)

    console.log(title, file)

    try {
      await axios.post('http://localhost:3002/WorkSheet/upload', formData,  {
          headers: {
              'Content-Type': 'multipart/form-data'  
          }
          });
          alert('File uploaded successfully');
      } catch (error) {
       
          console.error('Error uploading file: ', error);
      }
    }
  
    return (

      <div className='App min-h-screen'>

        <div className='pdf flex justify-center pb-6 mt-20 text-md font-semibold'>Upload Your Work</div>

        <form className='formStyle' onSubmit={submitImage}>

          {/* description textarea */}
          <div className="col-span-full flex justify-center mb-6">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"> email  :</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} name='email'   type='text' className='resize title form-control p-1 ml-4 border-2 border-gray-300 rounded-lg' placeholder='email'/>
          </div>
         
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 mx-80">
            <div className="text-center">
              
              {/* file upload */}
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input onChange={(e) => setFile(e.target.files[0])} id="file-upload" name="file-upload" type="file" className="form-control sr-only" accept='application/pdf ,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' required></input>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              
              <p className="text-xs leading-5 text-gray-600">pdf, doc  up to 10MB</p>
            </div>
          </div>

          <div className="col-span-full flex justify-center mb-6">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
            Upload
          </button>
          </div>
        
        </form>


      </div>

    )
  
}

export default S_AssignmentWork;