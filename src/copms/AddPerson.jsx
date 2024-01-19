import React, { useState } from "react";
import { nanoid } from "nanoid";
import { usePersonContext } from "../context/Context";

const AddPerson = () => {
  const { personList, addPerson, deletePerson } = usePersonContext();


  //todo: declaire state varriable
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    aadharNumber: "",
    phoneNumber: "",
  });

  //todo: to show the form
  const clickHandeller = () => {
    setShowForm(!showForm);
  };

  //todo: to save the infomation
  const saveInformation = (e) => {
    e.preventDefault();

    //* calculating age based on dob
    let personInfo = {
      ...formData,
      age: new Date().getFullYear() - new Date(formData.dob).getFullYear(),
    };

    if (formData.aadharNumber < 10000000000) {
      alert("Adhaar number's length should be 12");
      return;
    }
    if (formData.phoneNumber < 100000000) {
      alert("Phone number's length should be 10");
      return;
    }

    //* set list empty after adding
    addPerson([...personList, personInfo]);
    setFormData({
      name: "",
      dob: "",
      aadharNumber: "",
      phoneNumber: "",
    });

    //*divisible form after save
    setShowForm(false);
  };

  //todo: adding form data in the list when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //todo: delete person from directory
  const deletePersonHandller = (index) => {
    deletePerson(index)
  };

  return (
    <>
      <h3 style={{padding:'0rem 1rem'}}>Add New Person</h3>
      <div className="add_person">
        <table id='sample_table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {personList.map((person, i) => {
              return (
                <tr key={nanoid()}>
                  <td>{person[i].name}</td>
                  <td>{person[i].dob}</td>
                  <td>{person[i].aadharNumber}</td>
                  <td>{person[i].phoneNumber}</td>
                  <td>{person[i].age}</td>
                  <td>
                    <button onClick={() => deletePersonHandller(i)}>❌</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showForm && (
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            name="aadharNumber"
            value={formData.aadharNumber}
            min={10000000000}
            placeholder="Adhar Number"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number"
            min={100000000}
            required
            onChange={(e) => handleChange(e)}
          />
          <input type="number" placeholder="Age" disabled />
          <button onClick={(e) => saveInformation(e)}>💾</button>
        </form>
      )}
      <button className='addPerson'onClick={clickHandeller}>Add Person</button>
    </>
  );
};

export default AddPerson;
