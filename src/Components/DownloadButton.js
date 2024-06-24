/// src/Components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    fetch('/download')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf'); // Adjust the file name as needed
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <button onClick={handleDownload}>Download Resume</button>
  );
};

export default DownloadButton;
