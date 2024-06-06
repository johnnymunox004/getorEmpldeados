import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('[data-dialog-target]').forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-dialog-target');
        const dialog = document.querySelector(`[data-dialog="${target}"]`);
        const backdrop = document.querySelector(`[data-dialog-backdrop="${target}"]`);

        if (dialog && backdrop) {
          dialog.classList.add('opacity-100');
          backdrop.classList.remove('pointer-events-none', 'opacity-0');
          backdrop.classList.add('opacity-100');
        }
      });
    });

    document.querySelectorAll('[data-dialog-close]').forEach(button => {
      button.addEventListener('click', () => {
        const dialog = button.closest('[data-dialog]');
        const backdrop = document.querySelector(`[data-dialog-backdrop="${dialog.getAttribute('data-dialog')}"]`);

        if (dialog && backdrop) {
          dialog.classList.remove('opacity-100');
          backdrop.classList.add('pointer-events-none', 'opacity-0');
          backdrop.classList.remove('opacity-100');
        }
      });
    });
  }, []);

  return (
    <>
      
   
      <nav className="w-22 bg-black h-20 p-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
  <div className="text-5xl text-white font-bold">Tuttle</div>
  <div className="flex space-x-4">
    <Link to='/login' className="text-2xl text-white hover:text-gray-300 transition-colors duration-200">
      Inicio
    </Link>
  </div>
</nav>

    


      <section className="w-full bg-black h-full text-white flex justify-center   ">
        <img src="https://cdn.leonardo.ai/users/5663631f-e53a-413e-bd2f-3c164fc61885/generations/dd75caa6-d166-4c60-9b6c-bcccbe8d342d/Default_empresa_de_fotografia_Tuttle_1.jpg" alt="" className=" " />
      </section>


      <div className="flex mt-60 ">
        <div className="bg-gray-700 w-2/5 p-4 text-6xl italic ">
          <p className="text-white">Empieza a trabajar con nosotros</p>
          <button
            data-ripple-light="true"
            data-dialog-target="dialog"
            className="select-none text-6xl rounded-lg bg-blue-500 from-gray-200 to-gray-800 py-3 px-6 mt-5 text-center align-middle font-sans  font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            solicita
          </button>
          <div
            data-dialog-backdrop="dialog"
            data-dialog-backdrop-close="true"
            className="pointer-events-none  inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
          >
            <div
              data-dialog="dialog"
              className="relative m-4 w-3/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
            >
              <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                solicitud empleo
              </div>
              <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                En TUTTLE, estamos especialmente sensibilizados con la protección de datos de los usuarios de los servicios a los que pueden acceder a través de nuestra página web. Según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD), mediante la presente Política de Privacidad, POLAR informa a los usuarios del sitio web sobre el tratamiento y usos a los que se someten los datos de carácter personal que se recaban en la web, con la finalidad solicitud de empleo y que al aceptar la presente Política, el usuario acepta el tratamiento de sus datos en los términos definidos
              </div>
              <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                <button
                  data-ripple-dark="true"
                  data-dialog-close="true"
                  className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Cancel
                </button>
                <button
                  data-ripple-light="true"
                  data-dialog-close="true"
                  className="middle none center rounded-lg bg-green-600 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  
                >
                  <Link className=' py-6 px-6 ' to='/register'>Confirm</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-3/5 p-8">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media2.giphy.com/media/j3OL6mSc2FeV0UHMDg/200.webp?cid=ecf05e47aew9w64x7wjr9eycdeofd7abg1222g2ou598gagc&ep=v1_gifs_search&rid=200.webp&ct=g" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzRmNWpmYzN1bnc2ZmxncnR6Z2s5Mng4YXJ3ZHZyZHIzcWVzMGJkeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U8w32rwsxuVWM5EAMh/giphy.gif" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="gallery-photo" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Fvdzk4Znd4aWJrOHltZWJ2YmNjYWQydDloMjFhbDZoYnIyZ2VieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o9ppPEWEj2iGNLM1Bi/giphy.gif" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTExNm11azIxejVrajdqOHJ1Y2tjZ2dzZDh1emVqMHJ3YjN3OHM5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T0rRuQjUQYHSw/giphy.gif" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://64.media.tumblr.com/c91d1aa83c9785af78a2d945675c8f35/tumblr_mt9yl2pgLh1qa4szeo6_r1_500.gifv" alt="gallery-photo" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm56dmVpNGgwbDkyMDY3YzE4cTl2YTRpOWIzc2R3b3ZwcHU3aDdveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rbEQ5LkMhxUvm/giphy.gif" alt="https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://docs.material-tailwind.com/img/team-3.jpg" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="gallery-photo" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhjNmJ5dGhka2w2eW01b2w3OHcwZmxiY2trd2w1ZnZrMWFqZDlsciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CIlJ02B8xMuNn9A49F/giphy.gif" alt="gallery-photo" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2NtNDU4cXlyb3ZxdmhsOHVoM2c0ODZsazlvcWVnMW4zZnAxdndsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4lAFQxdGTik1klsWrN/giphy.gif" alt="gallery-photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
