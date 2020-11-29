import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getContact,updateContact } from "../../../actions/contactAction";
import { useParams } from "react-router-dom";

function EditContact() {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {

    if(contact!=null){
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
    }

    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact=(e)=>{
      e.preventDefault();

      const update_contact=Object.assign(contact,{name:name,phone:phone,email:email})
      dispatch(updateContact(update_contact))
      history.push("/")

  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
           Edit Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
