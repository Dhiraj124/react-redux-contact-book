import React,{ useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Contact from "./Contact";
import {selectAllContact,clearAllContacts,deleteAllContact} from "../../../actions/contactAction";

function Contacts() {
  const dispatch = useDispatch();
  const [selectAll,setSelectAll]= useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selctedContcats  = useSelector(
    (state) => state.contact.selectedContacts
  );
  console.log(selctedContcats);

  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContact(contacts.map(contact=> contact.id)))
    }
    else{
      dispatch(clearAllContacts())
    }
  },[selectAll])
  return (

    <div>
    
    {selctedContcats.length > 0 ? (
      <button
        className="btn btn-danger mb-3"
        onClick={() => dispatch(deleteAllContact())}
      >
        delete all
      </button>
    ) : null}

    
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input id="selectAll" value={selectAll} onClick={()=> setSelectAll(!selectAll)} className="custom-control-input" type="checkbox" />
                <label htmlFor="selectAll" className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => <Contact contact={contact} key={contact.id} selectAll={selectAll}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
