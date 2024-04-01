import React, { useState } from "react";


function T_HeroSection () {

    
    return (
        
      <div className=" min-h-screen">

        {/* Add image to topic div */}
        <div className="h-24 text-center p-6 text-2xl bg-student">
          <h1 className="font-bold p-3 text-white"> Welcome to the Student Dashboard </h1>
        </div>

        {/* Add features */}
        <div className="grid gap-4 grid-cols-2 m-20 text-center text-lg font-semibold cursor-pointer">

          <div onClick={() => (window.location.pathname = "/announcements")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200 ">
          Conduct Course Content</div>

          <div onClick={() => (window.location.pathname = "/events")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200 ">
          Uploading Learning Materials</div>

          <div onClick={() => (window.location.pathname = "/achievements")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200 ">
          Grade for Students</div>

          <div onClick={() => (window.location.pathname = "/t_dashboard/T_AssignmentUpload")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200 ">
          Upload Assignments
          </div>

          <div onClick={() => (window.location.pathname = "/")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200 ">
          Check Attendence</div>

          <div onClick={() => (window.location.pathname = "/")} className="border-2 border-zinc-400 m-18 h-14 rounded-md p-3 hover:bg-lime-200">
          </div>

        </div>

      </div>
      
      
      )
    
  }
  
  export default T_HeroSection;