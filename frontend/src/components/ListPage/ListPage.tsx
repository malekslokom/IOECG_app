import HeaderList from "../HeaderList/HeaderList";
interface ParametersProps {
    title: string;
    bouton: string
}

const ListPage: React.FC<ParametersProps> = ({title, bouton}) => {

    return (

        <div className="my-5">
        <div className="rounded bg-white p-3 shadow-sm" style={{ height: "100vh"}}>
          <div className="analyse-page">

            <div className="header">
              <div className="d-flex align-items-center justify-content-between">
                <h2 > {title}</h2>
                <div className="mb-0">
                  <button className="btn mb-10" style={{backgroundColor:"#E30613", color:"white", height:'  37px', width: '121px'}}> {bouton}</button>
                </div>
              </div>
              <hr style={{color:"#555"}}/>
            </div>
          
            <HeaderList></HeaderList>
            
          </div>

        </div>
        </div>

    );

}
export default ListPage;