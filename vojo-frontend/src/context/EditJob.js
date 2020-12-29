import React, { createContext, useState, useContext } from 'react';

const EditJobContext = createContext();

const EditJobsProvider = ({ children }) => {
  const [editJob, setEditJob] = useState({});

  return (
    <EditJobContext.Provider
      value={{
        editJob,
        setEditJob,
      }}
    >
      {children}
    </EditJobContext.Provider>
  );
};

export const useEditJob = () => {
  const { editJob, setEditJob } = useContext(EditJobContext);
  return { editJob, setEditJob };
};

export default EditJobsProvider;
