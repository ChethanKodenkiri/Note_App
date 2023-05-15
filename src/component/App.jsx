import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import InputArea from "./InputArea";

function App(){

   const [notes,setNotes] = useState([]);

   function addNote(newNote){
      setNotes(preValue => {
         return [...preValue,newNote]
      })
   }

   function deleteNote(id){
      setNotes(preValue=>{
         return preValue.filter((noteItems,index)=>{
            return index !== id;
         })
      })
   }


   return(<div>
      <Header />
      <InputArea addOn={addNote} />
      {notes.map((note,index)=>{
         return <Note 
         key={index}
         id={index}
         title={note.title}
         content={note.content} 
         onDelete={deleteNote}
         />
      })}
      <Footer />
   </div> )
}

export default App;