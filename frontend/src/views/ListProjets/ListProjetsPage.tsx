import React from 'react'

import "./ListProjetsPage.css";
import ListProjets from '../../components/ListProjets/ListProjets';

const ListProjetsPage = () => {

  let projects: any[]=[];

  for (let i = 0; i<8; i++){
    let acc: {[key: string]: string}={};
acc.name="projet1";
acc.creationDate="10/12/2023";
acc.author="Andy";
acc.version="v1";
acc.type="Classification";

projects.push(acc);
  }  






  return (
    <div className="Bloc">
        <div className="Bloc1">
            <div >
                <ListProjets projects={projects}  />
                
                
            </div>
       </div>
      </div>
  )
}

export default ListProjetsPage