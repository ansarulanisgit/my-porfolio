import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const UpdateTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState({});
  //Load the Testimonial details
  useEffect(() => {
    fetch(`https://cryptic-shelf-03380.herokuapp.com/testimonials/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, [id]);

  //Update testimonial
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedPort = {
      name: event.target.name.value,
      image: event.target.image.value,
      testimonial: event.target.testimonialData.value,
    };

    fetch(`https://cryptic-shelf-03380.herokuapp.com/testimonials/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPort),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Testimonial updated successfully.");
        navigate("/dashboard");
        event.target.reset();
      });
  };
  return (
    <div>
      <div className="container dashboard">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="add-portfolio content">
          <h2>Update {testimonial.name}'s Testimonial</h2>
          <form onSubmit={handleUpdate}>
            <input type="text" name="name" placeholder={testimonial.name} />
            <input type="text" name="image" placeholder={testimonial.image} />
            <input
              type="text"
              name="testimonialData"
              placeholder={testimonial.testimonial}
            />
            <input
              type="submit"
              value="Update Testimonial"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTestimonial;
