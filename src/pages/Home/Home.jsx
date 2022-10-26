import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import JournalEntries from './JournalEntries';
import { SlArrowDown } from 'react-icons/sl';
import './Home.css';

// hard coded to do list items
const items = [
  { id: '1', item: 'Go to costco to get gas' },
  { id: '2', item: 'Pickup sister from the airport' },
  { id: '3', item: 'Buy groceries for the week' },
];

// hard coded journal entries
const entries = [
  {
    id: '1',
    date: '9/2/2022',
    entry:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
      Lorem has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer ...',
  },
  {
    id: '2',
    date: '9/15/2022',
    entry:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
      Lorem has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer ...',
  },
  {
    id: '3',
    date: '10/1/2022',
    entry:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
      Lorem has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer ...',
  },
];

const Home = () => {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(() => {
      const count = Math.floor(Math.random() * 101);
      setCount(count, []);
    });
  });
  return (
    <div className="home">
      <div className="landing">
        {/* TODO:
            Add code here to display the text on the top panel
            (the "landing page," as this div is named.) The
            finished panel should display the two lines of text
            shown on the Figma design.
            Hello Alex! Welcome to Toody!<br></br>You’ve been using Toody for {count} days!
           */}
        <div className="welcome">Hello Alex! Welcome to Toody.</div>
        <div className="count-days">You’ve been using Toody for {count} days!</div>
        <button
          className="scroll-down"
          onClick={e => {
            let join = document.getElementById('to-do');
            e.preventDefault();
            join.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <SlArrowDown style={{ fontSize: '52px', color: '#FFFFFF' }} />
        </button>
      </div>
      <div className="to-do" id="to-do">
        <ToDo items={items} />
      </div>
      <div className="journal-entries">
        <JournalEntries entries={entries} />
      </div>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
