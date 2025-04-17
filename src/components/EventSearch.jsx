// Event.jsx
import React, { useState, useEffect } from 'react';
import './Event.css';
import { format } from 'date-fns';

const EventSearch = () => {
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState('technology');
  const [location, setLocation] = useState('Indore');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchEvents = async () => {
    const token = 'YCXYU7XUSC3OAD7WA6RD';
    const params = new URLSearchParams({
      q: keyword,
      'location.address': location,
      'online_event': 'false',
      'expand': 'venue',
      'sort_by': 'date'
    });
    if (startDate) params.append('start_date.range_start', `${startDate}T00:00:00Z`);
    if (endDate) params.append('start_date.range_end', `${endDate}T23:59:59Z`);

    const res = await fetch(`https://www.eventbriteapi.com/v3/events/search/?${params.toString()}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setEvents(data.events || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="event-container">
      <h1 className="event-title">Discover Offline Tech Events</h1>
      <p className="event-description">Browse through a wide range of tech-related offline events happening near you!</p>
      <div className="event-filters">
        <select value={keyword} onChange={e => setKeyword(e.target.value)} className="event-input">
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="health">Health</option>
          <option value="music">Music</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>

        <select value={location} onChange={e => setLocation(e.target.value)} className="event-input">
          <option value="Indore">Indore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>

        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="event-input"
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="event-input"
        />
      </div>

      <div className="event-button-container">
        <button onClick={fetchEvents} className="event-button">Search Events</button>
      </div>

      {events.length === 0 ? (
        <p className="event-empty">No events found. Try a different search!</p>
      ) : (
        <div className="event-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h2 className="event-name">{event.name.text}</h2>
              <p className="event-detail">
                📅 {format(new Date(event.start.local), 'PPPpp')}
              </p>
              {event.venue && (
                <p className="event-detail">
                  📍 {event.venue.name}, {event.venue.address.city}
                </p>
              )}
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                View Event
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventSearch;
