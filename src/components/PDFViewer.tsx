import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoom, setZoom] = useState(100);

  // This is a placeholder - in a real application, you would implement
  // actual PDF viewing using a library like pdf.js or react-pdf
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-900 p-3 flex justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
            aria-label="Zoom out"
          >
            <ZoomOut size={20} />
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">{zoom}%</span>
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
            aria-label="Zoom in"
          >
            <ZoomIn size={20} />
          </button>
          <a
            href={pdfUrl}
            download
            className="ml-4 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label="Download PDF"
          >
            <Download size={20} />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-850 p-4 min-h-[600px]">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            PDF viewer would display the resume here.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            In a production app, this would use a library like pdf.js or react-pdf.
          </p>
          <a
            href={pdfUrl}
            download
            className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            <Download size={16} className="mr-2" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};