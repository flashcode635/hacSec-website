import React from "react";
import './screenLoading.css'
 const Loader=()=>{
    return(
        <div style={{
          // display:'flex', alignItems:'center', justifyContent:'center',top:'50'
             display: 'grid',
    placeItems: 'center', height:'100vh'
          }}>
<div className="loading-screen-card">
  <div className="loader-screen" style={{display:'flex'}}>
    <div> 

    <p style={{fontSize:'34px', marginRight:'8px'}}>loading</p>
    </div>
    <div className="loading-sections">
      <span className="loading-sections-list">Blogs</span>
      <span className="loading-sections-list">Tools</span>
      <span className="loading-sections-list">Events</span>
      <span className="loading-sections-list">Modules</span>
      {/* <span className="loading-sections-list">AudioBooks</span> */}
      <span className="loading-sections-list">Quiz</span>
    </div>
  </div>
</div>

        </div>
    )
}

export default Loader;
