import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
         <div className="w-1/2 bg-indigo-50 flex items-center justify-center">
          <div className="flex items-center justify-center border border-indigo-300 rounded-full p-6">
            <RocketLaunchIcon className="text-indigo-400 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-white justify-center items-center px-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ingresa a Rate Updater</h2>
          <form className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="text" placeholder = "Email" className="placeholder-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input type="password" placeholder = "Tu Contraseña" className="placeholder-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <button type="submit" className="w-full bg-indigo-500 font-inter text-white text-lg font-bold py-4 px-4 rounded-xl hover:bg-indigo-400">
              Ingresar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
