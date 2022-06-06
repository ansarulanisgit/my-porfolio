import React from 'react';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar';

const AddPortfolio = () => {

    const handlePortfolio = event =>{
        event.preventDefault();
        const portfolioData ={
            title: event.target.title.value,
            image: event.target.image.value,
            github: event.target.github.value,
            liveDemo: event.target.liveDemo.value,
        }
        fetch('https://cryptic-shelf-03380.herokuapp.com/portfolio', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(portfolioData)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Portfolio added successfully.");
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
                    <h2>Add Portfolio</h2>
                    <form onSubmit={handlePortfolio}>
                        <input type="text" name='title' placeholder='Portfolio title' />
                        <input type="text" name='image' placeholder='Portfolio image' />
                        <input type="text" name='github' placeholder='Portfolio Github repo' />
                        <input type="text" name='liveDemo' placeholder='Portfolio live site link' />
                        <input type="submit" value="Add Portfolio" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPortfolio;