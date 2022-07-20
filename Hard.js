// hard

import React from 'react';
import BasicInfo from "./Medium";


const InfoList = () => {
  const peopleInfo = [
    {
      name: "pete",
      age: 24,
      dob: "10/02/1998"},

      {
        name: "tre",
        age: 28,
        dob: "03/15/1994" }
  ];
  return (
    <div className="peopleList">
        {peopleInfo.map((info) => (
            <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth}/>
        ))}
    </div>
);
};
export default InfoList;

