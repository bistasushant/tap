export default function MessageForm() {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-black flex flex-col lg:flex-row items-start justify-between gap-8 rounded-3xl p-8 md:p-12 lg:p-20">
            <div className="flex flex-col flex-1">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Interested in our digital solutions for your company?
              </p>
              <p className="text-white text-xs mt-4">
                Send us a message now, and we'll get back to you ASAP.
              </p>
            </div>
  
            <div className="bg-gray-100 rounded-xl p-6 md:p-8 lg:p-10 w-full lg:w-1/2 flex-1">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 p-3 border border-gray-300 rounded-md text-xs"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 p-3 border border-gray-300 rounded-md text-xs"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-3 border border-gray-300 rounded-md text-xs"
                />
                <input
                  type="text"
                  placeholder="Number of Employees"
                  className="p-3 border border-gray-300 rounded-md text-xs"
                />
                <textarea
                  placeholder="Message"
                  className="p-3 border border-gray-300 rounded-md text-xs h-32 resize-none"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-3 px-6 rounded-full font-semibold text-xs hover:bg-purple-700 transition mt-2 self-start"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  