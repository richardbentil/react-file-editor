import React, { useContext } from 'react';
import { saveAs } from 'file-saver';
import { FileContext } from '@/pages/context/FileContext';

const SaveButton = () => {
  const { file } = useContext(FileContext);

  const saveFile = () => {
    saveAs(file.content, file.name);
  };

  return <button className="btn btn-success" onClick={saveFile}>Save File</button>;
};

export default SaveButton;
