import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const UpdatePortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState({});
  //Load the portfolio item details
  useEffect(() => {
    fetch(`https://cryptic-shelf-03380.herokuapp.com/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
      });
  }, []);

  //Update portfolio

  const handleUpdate = event =>{
      event.preventDefault();
      const updatedPort = {
          title: event.target.title.value,
          image: event.target.image.value,
          github: event.target.github.value,
          liveDemo: event.target.liveDemo.value,
      }

      fetch(`https://cryptic-shelf-03380.herokuapp.com/portfolio/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedPort)
      })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Portfolio updated successfully.");
        navigate('/dashboard/portfolio');
        event.target.reset();
      });
  }
  return (
    <div>
      <div className="container dashboard">
        <div className="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div className="add-portfolio content">
          <h2>Update {portfolio.title}</h2>
          <form onSubmit={handleUpdate}>
            <input type="text" name="title" placeholder={portfolio.title} />
            <input type="text" name="image" placeholder={portfolio.image} />
            <input type="text" name="github" placeholder={portfolio.github} />
            <input
              type="text"
              name="liveDemo"
              placeholder={portfolio.liveDemo}
            />
            <input
              type="submit"
              value="Update Portfolio"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePortfolio;
