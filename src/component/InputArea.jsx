import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props){
    const[note,setNote] = useState({
        title:"",
        content:""
    });

    const [isExpand,setExpand]=useState(false);

function addNote(event){
    const {name,value} = event.target;
    setNote(prevValue =>{
        return{ ...prevValue,
        [name]:value
        }
    })
}

function submitNote(event){
    props.addOn(note);
    event.preventDefault();
    setNote({
        title:"",
        content:""
    })
}

function expand(){
    setExpand(true);
}
return(
    <div>
        <form className="create-note">
        {isExpand&&(<input name="title" placeholder="Title" value={note.title} onChange={addNote}></input>)}  
            <textarea name="content" placeholder="Take a note..." rows={isExpand?"3":"1"} value={note.content} onChange={addNote} onClick={expand}></textarea>
           <Zoom in={isExpand ? true:false}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
)
}

export default InputArea;