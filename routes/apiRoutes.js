const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs').promises;
const uuid = require('uuid');

// Path to the public directory
const dbFilePath = path.join(__dirname, 'db', 'db.json');

// Route to save a new note for POST /api/notes
router.post('/api/notes', async (req, res) => {
  try {
    
    const notesData = await fs.readFile(dbFilePath, 'utf8');
    const notes = JSON.parse(notesData);

    // Generate a unique ID for the new note
    const newNote = {
      id: uuid.v4(),
      title: req.body.title,
      content: req.body.content,
    };

    
    notes.push(newNote);

    
    await fs.writeFile(dbFilePath, JSON.stringify(notes), 'utf8');


    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
