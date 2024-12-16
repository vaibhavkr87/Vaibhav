function Contact() {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-green-400 to-blue-500 mb-4"
            >
              Let{"'"}s Talk
            </h3>
            <p>
              I{"'"}m open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <a
                href="mailto:vaibhavkr87097@gmail.com"
                className="hover:underline"
              >
                vaibhavkr87097@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <a href="tel:+918709764265" className="hover:underline">
                <span>+918709764265</span>
              </a>
            </div>
            <div className="mb-4">
              <span>
                61B White House Khudghat Tollygunge, Kolkata, 700040, West
                Bengal, India
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          <input type="hidden" name="access_key" value="3fa2010a-1940-4055-9ec7-1454862d079c"/>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                  placeholder="Enter You Name"
                />
              </div>
              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                  placeholder="Enter You Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                />
              </div>
              <button
              type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
