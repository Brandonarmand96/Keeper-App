import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";
import { createNotEmittedStatement } from "typescript";


function App() {


    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            retun[...prevNotes, newNote];
        });
    }
    return <
        div >
        <
        Header / > //{
        // Keep.map((noteItem) => <
        //    Note key = { noteItem.key }
        //    title = { noteItem.title }
        //     content = { noteItem.content }
        //     / > )} <
        //     Footer / >
        //     <
        //     /div>
        // );
        //}
        <
        CreateArea onAdd = { addNote }
    / > {notes.map((noteItem) => {
    return <Note
    title = { noteItem.title }
    content = { noteItem.content }
})
} <
Note key = { 1 }
title = "Note title"
content = "Note content" / >
    <
    Footer / >
    <
    /div>
);
}

export default App;