import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNotes } from '../../context/Notescontext'
import { FaTrashAlt } from "react-icons/fa";
import { MdUnarchive } from 'react-icons/md'
import { MdPushPin } from 'react-icons/md'
import { MdArchive } from 'react-icons/md'
import { MdOutlinePushPin } from 'react-icons/md'
import NotesCard from '../../components/NotesCard';
export default function Home() {
    const { notes, Notesdispatch } = useNotes();
    console.log('notes array in home is',notes);
    const onAddNotes = () => {
        Notesdispatch(
            {
                type: 'ADD_TO_NOTES',
            }
        )
    }
    const onTitleChange = (e) => {
        Notesdispatch(
            {
                type: 'ADD_TO_TITLE',
                payload: e.target.value
            }
        )
    }
    const onTextChange = (e) => {
        Notesdispatch(
            {
                type: 'ADD_TO_TEXT',
                payload: e.target.value
            }
        )
    }
    const onArchiveClick=(id)=>{
        Notesdispatch(
            {
                 type:'ADD_TO_ARCHIVE',
                 payload:id
            }
        )
    }
     const onBinClick=(id)=>{
        Notesdispatch(
            {
                 type:'ADD_TO_BIN',
                 payload:id
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', border: '1px solid black', height: '100px' }}>
                    <input placeholder='Enter the Title' style={{ border: 'none' }} onChange={onTitleChange} />
                    <input placeholder='Enter the notes' style={{ border: 'none', marginTop: '5px', height: '80%', width: '80%' }} onChange={onTextChange} />
                    <span><button style={{ position: 'relative', left: '50px' }} onClick={onAddNotes}>add</button></span>
                </div>
            </div>
            {/* this is displaying notes */}
            <div style={{ display: 'flex', flexDirection: 'row', margin: '4px' }}>
                {
                    notes?.length > 0 && notes.map(val =>
                    (
                        <div key={val.id} style={{ border: '1px solid black', margin: '2px' }}>
                            <button><MdOutlinePushPin/></button>
                            <p>Title is {val.title}</p>
                            <p>Text is {val.text}</p>
                            <button onClick={()=>onArchiveClick(val.id)}><MdArchive/></button>
                            <button onClick={()=>onBinClick(val.id)}><FaTrashAlt/></button>
                        </div>
                    )
                    )
                }
      </div>
        </div>
    )
}
