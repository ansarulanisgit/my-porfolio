import React from 'react';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar';

const AddTestimonial = () => {

    const handleTestimonial = event =>{
        event.preventDefault();
        const testimonialData ={
            name: event.target.name.value,
            image: event.target.image.value,
            testimonial: event.target.testimonialData.value,
        }
        fetch('https://cryptic-shelf-03380.herokuapp.com/testimonials', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(testimonialData)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Testimonial added successfully.");
            event.target.reset();
        })
    }
    return (
        <div>
            <div className="container dashboard">
                <div className="sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="add-portfolio content">
                    <h2>Add Testimonial</h2>
                    <form onSubmit={handleTestimonial}>
                        <input type="text" name='name' placeholder='Client name' />
                        <input type="text" name='image' placeholder='Client avatar' />
                        <input type="text" name="testimonialData" placeholder='Write the testimonial...' />                        
                        <input type="submit" value="Add Testimonial" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTestimonial;