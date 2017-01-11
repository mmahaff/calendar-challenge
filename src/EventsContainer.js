import React, { Component } from 'react';

const EventsContainer = props => {
  return(
    <div className="Events-container">
      <div className="times">
        <h5>9:00 <span>AM</span></h5>
        <h6>9:30</h6>
        <h5>10:00 <span>AM</span></h5>
        <h6>10:30</h6>
        <h5>11:00 <span>AM</span></h5>
        <h6>11:30</h6>
        <h5>12:00 <span>PM</span></h5>
        <h6>12:30</h6>
        <h5>1:00 <span>PM</span></h5>
        <h6>1:30</h6>
        <h5>2:00 <span>PM</span></h5>
        <h6>2:30</h6>
        <h5>3:00 <span>PM</span></h5>
        <h6>3:30</h6>
        <h5>4:00 <span>PM</span></h5>
        <h6>4:30</h6>
        <h5>5:00 <span>PM</span></h5>
        <h6>5:30</h6>
        <h5>6:00 <span>PM</span></h5>
        <h6>6:30</h6>
        <h5>7:00 <span>PM</span></h5>
        <h6>7:30</h6>
        <h5>8:00 <span>PM</span></h5>
        <h6>8:30</h6>
        <h5>9:00 <span>PM</span></h5>
      </div>
      <div className="events">
        <h1> Events</h1>
      </div>
    </div>
  )
}

export default EventsContainer;
