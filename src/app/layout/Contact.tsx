function Contact() {
    return (
        <div id="contact" className="py-14 px-4 bg-[#ce4233] text-[#382711] font-medium md:px-20">
            <h2 className="text-2xl font-black md:text-3xl">Contact</h2>
            <form className="flex flex-col">
                <label htmlFor="name" hidden />
                <input name="name"
                       type="text"
                       placeholder="Your Name"
                       required
                       className="bg-white p-2 mt-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm md:w-1/2"
                />

                <label htmlFor="email" hidden />
                <input name="email"
                       type="email"
                       placeholder="Your Email"
                       required
                       className="bg-white p-2 mt-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm md:w-1/2"
                />

                <label htmlFor="message" hidden />
                <textarea name="message"
                          placeholder="Your Message"
                          rows={6}
                          required
                          className="bg-white p-2 mt-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm md:w-1/2 resize-none"
                />

                <button type="submit" className="bg-gray-600 hover:bg-[#343944] text-white font-bold py-2 px-4 mt-5 rounded w-fit" disabled>Submit</button>
            </form>
        </div>
    );
}

export default Contact;