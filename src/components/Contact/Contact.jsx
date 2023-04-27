/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';

function Contact() {
  return (
    <main className="relative py-28">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-black text-3xl font-semibold sm:text-4xl">
            Contact
          </p>
          <p className="text-black">
            N'hésitez pas à nous contacter pour toute question, suggestion ou demande d'information.
            Nous sommes là pour vous aider et serions ravis d'avoir de vos nouvelles !
          </p>
        </div>
        <div className="mt-3 mx-2 px-4 p-8 bg-white sm:mx-auto sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label className="font-medium">
                Nom
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Objet
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Message
              </label>
              <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg" />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-orange-400 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]" style={{ background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)' }} />
    </main>
  );
}

export default Contact;
