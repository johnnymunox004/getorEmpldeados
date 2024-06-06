import React from 'react';
import jsPDF from 'jspdf';

function GeneradorPDF({ id, nombre, telefono, correo,file,Identificación,Teléfono,sexo,edad }) {
  const generarPDF = () => {
    const doc = new jsPDF();
    
    // Agregar contenido al PDF
    doc.text(`ID: ${id}`, 10, 10);
    doc.text(`Nombre: ${nombre}`, 10, 20);
    doc.text(`Teléfono: ${telefono}`, 10, 30);
    doc.text(`Correo: ${correo}`, 10, 40);
    doc.text(`file: ${file}`, 10,50);
    doc.text(`Identificación: ${Identificación}`, 10,60);
    doc.text(`telefono: ${Teléfono}`, 10,70);
    doc.text(`sexo: ${sexo}`, 10,80);
    doc.text(`edad: ${edad}`, 10,90);





    
    // Guardar el PDF con un nombre específico
    doc.save(`documento${id}.pdf`);
  };

  return (
    <div>
      <button className=' bg-green-700 w-16 flex justify-center text-white' onClick={generarPDF}>Generar PDF</button>
    </div>
  );
}

export default GeneradorPDF;
