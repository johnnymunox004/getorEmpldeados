import React, { useEffect } from "react";
import useAspiranteStore from "../store/useAspirantesStore";

export const AspiranteList = () => {
  const { aspiranteList, fetchAspiranteList, loading, error, message } =
    useAspiranteStore((state) => ({
      aspiranteList: state.aspiranteList,
      fetchAspiranteList: state.fetchAspiranteList,
      loading: state.loading,
      error: state.error,
      message: state.message,
    }));

  useEffect(() => {
    fetchAspiranteList();
  }, [fetchAspiranteList]);

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div className="py-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold leading-tight">Lista de Aspirantes</h2>
      </div>
      <div className="mt-6">
        {loading ? (
          <div className="text-center">Cargando...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Identificación</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dept</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Creación</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Editar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {aspiranteList.map((aspirante) => (
                    <tr key={aspirante._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{aspirante.nombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.identificacion}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.edad}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.sexo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.rol}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.dept}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.telefono}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aspirante.estado}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(aspirante.date_create).toLocaleDateString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {message && <div className="text-center text-green-500">{message}</div>}
        </div>
      </div>
    </div>
  );
};
