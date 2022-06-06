import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const AllPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  //Load all portfolio
  useEffect(() => {
    fetch("https://cryptic-shelf-03380.herokuapp.com/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, [portfolio]);

  //Delete a portfolio
  const deletePortfolio = (id) => {
      const isConfirmed = window.confirm("Do you want to delete the portfolio");
      if(isConfirmed){
        fetch(`https://cryptic-shelf-03380.herokuapp.com/portfolio/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          toast.success("Portfolio deleted successfully.");
          fetch("https://cryptic-shelf-03380.herokuapp.com/portfolio")
            .then((res) => res.json())
            .then((data) => setPortfolio(data));
        },
        []
      );
      }
    
  };
  return (
    <div>
      <div className="container">      
        <div className="content">
          <h2>Manage Portfolio</h2>
          <table>
            <tbody>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Github</th>
                <th>Live</th>
                <th>Action</th>
              </tr>
              {portfolio.map((data) => (
                <tr key={data._id}>
                  <td>
                    <img src={data.image} alt="" />
                  </td>
                  <td>{data.title}</td>
                  <td><Link to={data.github} >Github</Link></td>
                  <td><Link to={data.liveDemo} >Live site</Link></td>
                  <td>
                    <Link to={`/dashboard/update-portfolio/${data._id}`} className="btn btn-primary">Update</Link>
                    <a onClick={() => deletePortfolio(data._id)} className="btn btn-primary">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPortfolio;
