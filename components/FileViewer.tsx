import React, { useContext } from 'react';
import { FileContext } from '../context/FileContext';

const FileViewer = () => {
  const { file } = useContext(FileContext);

  if (!file) return <p>No file uploaded</p>;

  if (file.type.includes('image')) {
    return <img src={file.content} alt={file.name} className="img-fluid" />;
  }

  if (file.type === 'application/pdf') {
    return <iframe src={file.content} width="100%" height="500px" title="PDF Viewer"></iframe>;
  }

  return <p>Unsupported file type: {file.name}</p>;
};

export default FileViewer;
