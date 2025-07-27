import emailjs from '@emailjs/browser';
import { type FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);


    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
        ).then(
            () => {
                setIsSending(false);
                toast.success('Message sent!', {
                    duration: 4000,
                    icon: '📬',
                });
                form.current?.reset(); // ✅ clear the form
            },
            (error) => {
                setIsSending(false);
                toast.error('Failed to send message. Try again later.', {
                    duration: 4000,
                });
                console.error('FAILED...', error.text);
            },
        );
    };

    return (
        <div id="contact" className="py-14 px-4 bg-[#ce4233] text-[#382711] font-medium md:px-20">
            <h2 className="text-2xl font-black md:text-3xl">Contact</h2>
            <div className="flex flex-col w-full md:flex-row">
                <div className="pt-9 w-full flex flex-col gap-4 justify-center items-center md:items-start md:pt-0">
                    <a href="https://github.com/michaelcherrera84" target="_blank" rel="noopener noreferrer">
                        <button className="bg-black cursor-pointer flex items-center text-white rounded-full py-3 px-5 w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 mr-4"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Check out my GitHub
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/michaelcherrera/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#0077b5] cursor-pointer flex items-center text-white rounded-full py-3 px-5 w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 mr-4"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            Connect on LinkedIn
                        </button>
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
                    <input hidden name="title" value="General Contact" />
                    <label htmlFor="name" hidden />
                    <input name="name" type="text" placeholder="Your Name" required
                           className="bg-white p-2 mt-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm"
                    />
                    <label htmlFor="email" hidden />
                    <input name="email" type="email" placeholder="Your Email" required
                           className="bg-white p-2 mt-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm"
                    />
                    <label htmlFor="message" hidden />
                    <textarea name="message" placeholder="Your Message" rows={6} required
                              className="bg-white p-2 mt-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm resize-none"
                    />
                    <button type="submit"
                            disabled={isSending}
                            className={isSending ?
                                'bg-gray-600 text-white font-bold py-2 px-4 mt-5 rounded w-fit opacity-50'
                                : 'bg-gray-600 hover:bg-[#343944] text-white font-bold py-2 px-4 mt-5 rounded w-fit cursor-pointer'
                            }
                    >
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;