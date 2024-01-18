import React, { createContext, useContext, useState } from 'react'

const InformationContext = createContext();

export const PersonProvider = ({ children }) => {
    const [personList, setPersonList] = useState([]);

    const addPerson = (personInfo) => {
        setPersonList([...personList, personInfo]);
    }

    const deletePerson = (index) => {
        const newList = [...personList];
        newList.splice(index, 1);
        setPersonList(newList);
    };

    return (
        <InformationContext.Provider value={{ personList, addPerson, deletePerson }}>
          {children}
        </InformationContext.Provider>
      );

}

export const usePersonContext = () => {
    return useContext(InformationContext);
  };