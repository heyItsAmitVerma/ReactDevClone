import { Link } from "react-router-dom";

const Community = () =>{

    return(
        <>
      
        <div className="container-fluid mt-5">
           <div className="row">
               <div className="col-md-2 col-sm-12 ">
                   <br/>
                   <p>Get INVOLVED</p>
                 
                   {/* <select>
                  
                       <option><b>Hooks</b></option>
                       <option>Use</option>
                       <option>Call Back</option>
                       <option>Usecontext</option>
                       <option>UseDebugValue</option>
                       <option>UseDefferedValue</option>
                       <option>UseEffect</option>
                       <option>Useld</option>
                       <option>UseImperativeHandle</option>
                   </select> */}
                   <br/>

                   <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                   <option selected>Community</option>
                 
                   </select>

                   <p>React Conferances</p>
                   <p>React meetups</p>
                   <p>React Videos</p>
                   <p>Meet the Team</p>
                   <p>Docs Contributors</p>
                   <p>Acknowledgements</p>
                   <p>Versioning Policy</p>

                   
                  


                   
               </div>

               <div className="col-md-8 col-sm-12">

               </div>

               <div className="col-md-2 col-sm-12 mt-5">
                   <p>ON THIS PAGE</p>
                   <Link ><h6>Overview</h6></Link>
                   <Link><h6>Buil-in-Components</h6></Link>
                   <Link><h6>Your own Components</h6></Link>
                

               </div>

           </div>
        </div>
       </>
      
    )
}

export default Community;