import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AnalyseShow = () => {

    return (    
    	 <div className="my-5">
      <div className="container-fluid rounded border p-3" style={{backgroundColor:'white'}}>
        
        <div className="row" >

          <div className="col-md-8">
          <div className="rounded border p-3 position-relative shadow-sm" style={{ height: "50vh" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h5 > Expériences</h5>
            <div className="mb-0">
              <button className="btn mb-10" style={{backgroundColor:"#E30613", color:"white"}}>Exécuter</button>
            </div>
            </div>
            <hr style={{color:"#555"}}/>
          </div>
          </div>

          <div className="col-md-4">
          <div className="rounded border p-3 position-relative shadow-sm" style={{ height: "50vh" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h5> Datasets</h5>
            <div className="mt-1 me-2">
              <FontAwesomeIcon icon={faPlusCircle}  style={{color:"#E30613", fontSize: '1.2em'}}/>
            </div>
            </div>
            <hr style={{color:"#555"}}/>
          </div>
          </div>

        </div>

        <div className="row mt-3" >
          <div className="col-md-8 ">
          <div className="rounded border p-3 position-relative shadow-sm" style={{ height: "50vh" }}>
            <div className="d-flex align-items-center justify-content-between">
            <h5> Rapports</h5>
            <div className="mb-0">
              <button className="btn px-2" style={{backgroundColor:"#E30613", color:"white"}}>Comparer</button>
            </div>
            </div>
            <hr style={{color:"#555"}}/>
          </div>
          </div>
          <div className="col-md-4">
          <div className="rounded border p-3 position-relative shadow-sm" style={{ height: "50vh" }}>
            <div className="d-flex align-items-center justify-content-between"> 
            <h5> Modèles</h5>
            <div className="mt-1 me-2">
              <FontAwesomeIcon icon={faPlusCircle}  style={{color:"#E30613", fontSize: '1.2em'}}/>
            </div>
            </div>
            <hr style={{color:"#555"}}/>
            </div>
           
          </div>
        </div>


      </div>
      </div>



     );
}

export default AnalyseShow;
