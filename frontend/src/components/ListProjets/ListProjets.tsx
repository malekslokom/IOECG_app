import React from 'react'

import "./ListProjets.css";
import {
  ReloadOutlined,
  CalendarOutlined,
  RedoOutlined,
    DatabaseOutlined,
    SearchOutlined,
    FilterOutlined,
  } from "@ant-design/icons";
import Menu from 'antd/es/menu';
import oeil from "../../assets/oeil.png";
import delete1 from "../../assets/delete.png";
import { Button, DatePicker, Input, Select, Pagination } from 'antd';

interface ListProjetsProps {
    projects : any[] ; // liste des projets
  }

  const itemRender = (current: any, type: string, originalElement: any) => {
    if (type === 'prev') {
      return <a>Préc</a>; // Replace "Préc" with your custom text or element
    }
    if (type === 'next') {
      return <a>Suiv</a>; // Replace "Suiv" with your custom text or element
    }
    return originalElement;
  };

const ListProjets = ({ projects}:ListProjetsProps) => {
    
      return (
        <div className="App">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-6">
              <h2>Projets</h2>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-gray" style={{ backgroundColor: '#aaaaaa30', color: 'black'}}>Créer</button>
            </div>
            <br/> <hr/>
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="filters">
              <Menu mode="horizontal" theme="light" >
                <Menu.Item key="refresh" icon={<RedoOutlined />}>
                    Refresh
                </Menu.Item>

                <Menu.Item key="calendar1" /*icon={<CalendarOutlined />}*/ style={{ width: 130 }}>
                  <DatePicker /*onChange={handleDateChange}*/ />
                </Menu.Item>

                <Menu.Item key="calendar2" /*icon={<CalendarOutlined />}*/ style={{ width: 130 }}>
                  <DatePicker /*onChange={handleDateChange}*/ />
                </Menu.Item>

                <Menu.Item key="type">
                <Select defaultValue="Type" style={{ width: 120 }} /*onChange={handleTypeChange}*/>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </Select>
              </Menu.Item>

              <Menu.Item key="version">
                <Select defaultValue="Version" style={{ width: 120 }} /*onChange={handleVersionChange}*/>
                  <option value="v1">v1</option>
                  <option value="v2">v2</option>
                </Select>
              </Menu.Item>

                <Menu.Item key="filter" >
                <Button icon={<FilterOutlined />} /*onClick={handleFilterClick}*/>
                  Filter
                </Button>
                </Menu.Item>

                <Menu.Item key="search" >
                <Input
                    placeholder="chercher ...."
                    prefix={<SearchOutlined />}
                    /*onPressEnter={e => handleSearch(e.target.value)}*/
                  />
                </Menu.Item>
              </Menu>
                <hr/>
              </div>
              <br/><br/>

              
             
              <table className="table table-striped table-bordered table-hover ">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Date création</th>
                    <th>Auteur</th>
                    <th>Version</th>
                    <th>Type</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>{project.name}</td>
                      <td>{project.creationDate}</td>
                      <td>{project.author}</td>
                      <td>{project.version}</td>
                      <td>{project.type}</td>
                      <td><button className="btn btn-danger btn-sm"><img src={delete1} alt="Delete" /></button></td>
                      <td><button className="btn btn-info btn-sm"><img src={oeil} alt="View" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br/><br/>
              <div style={{ textAlign: 'right'}}>
              <Pagination
                defaultCurrent={1}
                total={50} // Le total d'éléments que vous avez
                pageSize={10} // Combien d'éléments vous voulez afficher par page
                /*onChange={(page, pageSize) => {
                  // Gérez le changement de page ici
                  console.log(page, pageSize);
                }}*/
                itemRender={itemRender}
              />

              </div>
            </div>
          </div>
        </div>
      </div>
        
      );

      
    
}

export default ListProjets