import React, { useState } from "react";
import { nanoid } from 'nanoid';

const AddPerson = () => {
    //todo: declaire state varriable
    const [showForm, setShowForm] = useState(false);
    const [list, setList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        aadharNumber: '',
        phoneNumber: ''
    });

  //todo: to show the form
  const clickHandeller = () => {
    setShowForm(!showForm);
  };

  //todo: to save the infomation
  const saveInformation = (e) => {
    e.preventDefault();
    
    //* calculating age based on dob
    let personInfo = {...formData, age: new Date().getFullYear() - new Date(formData.dob).getFullYear()};

    if(formData.aadharNumber < 10000000000){
        alert('Adhaar number\'s length should be 12');
        return;
    }
    if(formData.phoneNumber < 100000000){
        alert('Phone number\'s length should be 10');
        return;
    }

    //* set list empty after adding
    setList([...list, personInfo]);
    setFormData({
        name:'',
        dob:'',
        aadharNumber:'',
        phoneNumber:'' 
    });

    //*divisible form after save
    setShowForm(false)
    
  };

  //todo: adding form data in the list when input changes
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  //todo: delete person from directory
  const deletePerson = (index) =>{
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);

  }

  return (
    <>

      <div className="add_person">
        <table border={'1px solid'}>
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
        {
            list.map((person, index)=>{
                return(
                    <tr key={nanoid()}>
                        <td>{person.name}</td>
                        <td>{person.dob}</td>
                        <td>{person.aadharNumber}</td>
                        <td>{person.phoneNumber}</td>
                        <td>{person.age}</td>
                        <td><button onClick={()=>deletePerson(index)}>❌</button></td>
                    </tr>
                );
            })
        }
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
            onChange={(e)=>handleChange(e)}
          />
          <input 
            type="date"
            name="dob"
            value={formData.dob} 
            required
            onChange={(e)=>handleChange(e)} 
          />
          <input
            type="number"
            name="aadharNumber"
            value={formData.aadharNumber}
            min={10000000000}
            placeholder="Adhar Number"
            required
            onChange={(e)=>handleChange(e)}
          />
          <input 
            type="number" 
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number" 
            min={100000000}
            required
            onChange={(e)=>handleChange(e)}
          />
          <input 
            type="number" 
            placeholder="Age" 
            disabled 
          />
          <button onClick={(e) => saveInformation(e)}>Save</button>
        </form>
      )}
      <button onClick={clickHandeller}>Add Person</button>
    </>
  );
};

export default AddPerson;
