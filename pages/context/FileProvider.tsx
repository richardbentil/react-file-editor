import React, { useState } from 'react';
import { FileContext } from './FileContext';

const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  return (
    <FileContext.Provider value={{ file, setFile, annotations, setAnnotations }}>
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
