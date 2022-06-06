import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const AllTestimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  //Load all portfolio
  useEffect(() => {
    fetch("https://cryptic-shelf-03380.herokuapp.com/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, [testimonial]);

  //Delete a portfolio
  const deleteTestimonial = (id) => {
      const isConfirmed = window.confirm("Do you want to delete the testimonial?");
      if(isConfirmed){
        fetch(`https://cryptic-shelf-03380.herokuapp.com/testimonials/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          toast.success("Testimonial deleted successfully.");
          fetch("https://cryptic-shelf-03380.herokuapp.com/testimonials")
            .then((res) => res.json())
            .then((data) => setTestimonial(data));
        },
        []
      );
      }
    
  };
  return (
    <div>
      <div className="container">      
        <div className="content">
          <h2>Manage Testimonials</h2>
          <table>
            <tbody>
              <tr>
                <th>Avatar</th>
                <th>Client Name</th>
                <th>Testimonial</th>
                <th>Action</th>
              </tr>
              {testimonial.map((data) => (
                <tr key={data._id}>
                  <td>
                    <img src={data.image} alt="" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.testimonial}</td>
                  <td>
                    <Link to={`/dashboard/update-testimonial/${data._id}`} className="btn btn-primary">Update</Link>
                    <a onClick={() => deleteTestimonial(data._id)} className="btn btn-primary">Delete</a>
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

export default AllTestimonial;
