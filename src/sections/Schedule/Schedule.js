import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const sat = [
    {
      time: "9:00-10:30 am",
      event: "Student Check-in",
    },
    {
      time: "11:00-11:15 am",
      event: "Opening Ceramony",
    },
    {
      time: "11:15 am -12:15 pm",
      event: "Opening Keynote",
    },
    {
      time: "12:15-1:00 pm",
      event: "Lunch",
    },
    {
      time: "1:00-2:00 pm",
      event: "Ideation Workshop and Sponsor Fair",
    },
    {
      time: "2:00-3:00 pm",
      event: "Environment and Inequality Track Talks",
    },
    {
      time: "3:00-4:00 pm",
      event: "Health and Education Track Talks",
    },
    {
      time: "4:00-5:00 pm",
      event: "Puppy Kindergarten!",
    },
    {
      time: "5:00-6:00 pm",
      event: "UI/UX Design Workshop",
    },
    {
      time: "6:00-7:00 pm",
      event: "Dinner",
    },
    {
      time: "7:00-8:00 pm",
      event: "Mixer for Female-identifying and Non-binary Hackers",
    },
    {
      time: "8:30-11:00 pm",
      event: "Social Events",
    },
    {
      time: "11:00-11:45 pm",
      event: "Spicy Noodle Challenge",
    },
  ];

  const sun = [
    {
      time: "12:00-1:00 am",
      event: "Midnight Snack",
    },
    {
      time: "9:00-10:00 am",
      event: "Breakfast",
    },
    {
      time: "11:00-12:00 pm",
      event: "Lunch",
    },
    {
      time: "12:30 pm",
      event: "Hacking Ends",
    },
    {
      time: "1:00-2:00 pm",
      event: "Pitching Workshop",
    },
    {
      time: "2:00-4:30 pm",
      event: "Judging",
    },
    {
      time: "5:00-6:00 pm",
      event: "Closing Keynote",
    },
    {
      time: "6:00-6:30 pm",
      event: "Closing Ceremony",
    },
  ];

  return (
    <div id="schedule" className="schedule">
      <h2>Schedule</h2>
      <div class="row sched">
        <div class="column day">
          <div class="date">Satuday, October 22</div>
          {sat.map((e) => {
            return (
              <div className="row entry">
                <div className="column lilent">
                  <div class="time-place">{e.time}</div>
                </div>
                <div className="column">
                  <div class="time-place">{e.event}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div class="column day">
          <div class="date">Sunday, October 23</div>
          {sun.map((e) => {
            return (
              <div className="row">
                <div className="column">
                  <div class="time-place">{e.time}</div>
                </div>
                <div className="column">
                  <div class="time-place">{e.event}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
