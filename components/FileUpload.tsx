import { FileContext } from '@/pages/context/FileContext';
import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const { setFile } = useContext(FileContext);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFile({ name: file.name, content: fileReader.result, type: file.type });
    };
    fileReader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ['.pdf', '.doc', '.xls', '.xlsx', '.jpg', '.png', '.msg'] });

  return (
    <div {...getRootProps()} className="dropzone p-5 border border-primary text-center">
      <input {...getInputProps()} />
      <p>Drag & drop a file here, or click to select a file</p>
    </div>
  );
};

export default FileUpload;
