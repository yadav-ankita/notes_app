
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNotes } from '../../context/Notescontext'
import { MdOutlinePushPin } from 'react-icons/md'
export default function Bin() {
    const {deleted}=useNotes();
    console.log('deleted array is',deleted)
    return (
        <div>
            <Navbar />
            <Sidebar/>
           <div style={{ display: 'flex', flexDirection: 'row', margin: '4px' }}>
                           {
                               deleted?.length > 0 && deleted.map(val =>
                               (
                                   <div key={val.id} style={{ border: '1px solid black', margin: '2px' }}>
                                       <button><MdOutlinePushPin/></button>
                                       <p>Title is {val.title}</p>
                                       <p>Text is {val.text}</p>
                                   </div>
                               )
                               )
                           }
                 </div>
            <h1>This is Bin page</h1>
        </div>
    )
}
