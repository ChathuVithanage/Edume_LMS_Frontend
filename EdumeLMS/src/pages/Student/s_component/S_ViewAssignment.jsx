import React from 'react';
// import PDFViewer from '../';
// import DocViewer from './DocViewer';

const FileViewer = ({ file }) => {
  const getFileViewer = () => {
    if (file.type === 'pdf') {
      return <PDFViewer pdfPath={file.path} />;
    } else if (file.type === 'doc') {
      return <DocViewer docPath={file.path} />;
    } else {
      return <div>Unsupported file type</div>;
    }
  };

  return (
    <div>
      <h2>File Viewer</h2>
      {getFileViewer()}
    </div>
  );
};

export default FileViewer;
