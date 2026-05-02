import { useParams } from "react-router-dom";

const PDFViewer = () => {
  const { pdfName } = useParams<{ pdfName: string }>();

  return (
    <iframe
      title={pdfName}
      src={`/pdf_files/${pdfName}.pdf`}
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", border: "none" }}
    />
  );
};

export default PDFViewer;
