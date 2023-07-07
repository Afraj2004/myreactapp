import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@material-ui/core';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>

      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Typography>{note.id}</Typography>
              <li >
                <Typography>{note.title}</Typography>
              <Typography>{note.user}</Typography>
              <Typography>{note.category}</Typography>
              <Typography>{note.notes}</Typography>
              </li>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default App;
