import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SQLDataGetterTest() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');

  // Fetch existing data from the backend
  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  // Handle form submission (upload data to the server)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    // Create the data to send
    const newData = {
      name,
      description,
      region
    };

    // POST data to your backend API
    axios.post('http://localhost:3001/api/upload', newData)
      .then(res => {
        // Optionally, you can handle success by showing a message or re-fetching data
        alert('Data uploaded successfully!');
        setData(prevData => [...prevData, res.data]); // Add new data to the list (optimistic update)
      })
      .catch(err => {
        console.error('Error uploading data:', err);
      });

    // Clear input fields after submission
    setName('');
    setDescription('');
    setRegion('');
  };

  return (
    <div>
      {/* Display existing data */}
      {data.map((row, idx) => (
        <div key={idx}>
          {JSON.stringify(row)}
        </div>
      ))}

      {/* Form to upload new data */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Region:</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <button type="submit">Upload Data</button>
      </form>
    </div>
  );
}
