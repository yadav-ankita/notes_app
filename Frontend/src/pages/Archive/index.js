import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNotes } from '../../context/Notescontext'
import { FaTrashAlt } from "react-icons/fa";
import { MdUnarchive } from 'react-icons/md'
import { MdOutlinePushPin } from 'react-icons/md'
export default function Bin() {
    const {archive,Notesdispatch}=useNotes();
    console.log('archived array is ',archive)
     const onBinClick=(id)=>{
        Notesdispatch(
            {
                 type:'ADD_TO_BIN',
                 payload:id
            }
        )
    }
    const onUnArchiveClick=(id)=>{
        Notesdispatch(
            {
                type:'ADD_TO_UNARCHIVE',
                payload:id
            }
        )
    }
    return (
        <div>
            <Navbar />
            <Sidebar />
           <div style={{ display: 'flex', flexDirection: 'row', margin: '4px' }}>
                           {
                               archive?.length > 0 && archive.map(val =>
                               (
                                   <div key={val.id} style={{ border: '1px solid black', margin: '2px' }}>
                                       <button><MdOutlinePushPin/></button>
                                       <p>Title is {val.title}</p>
                                       <p>Text is {val.text}</p>
                                       <button onClick={()=>onUnArchiveClick(val.id)}><MdUnarchive/></button>
                                       <button onClick={()=>onBinClick(val.id)}><FaTrashAlt/></button>
                                   </div>
                               )
                               )
                           }
                 </div>
            <h1>This is Archives page</h1>
        </div>
    )
}
