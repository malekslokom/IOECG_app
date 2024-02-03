import React from 'react'

import "./ListProjetsPage.css";
import ListProjets from '../../components/ListProjets/ListProjets';

const ListProjetsPage = () => {

let acc: {[key: string]: string}={};
acc.name="projet1";
acc.creationDate="10/12/2023";
acc.author="Andy";
acc.version="v1";
acc.type="Classification";


const projects: any[]=[acc, {name:"projet1",creationDate:"10/12/2023",author:"Andy",version:"v1",type:"Classification"}];


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