import { type FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
            import.meta.env.VITE_EMAILJS_TUTOR_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
        ).then(
            () => {
                setIsSending(false);
                toast.success('Message sent!', {
                    duration: 4000,
                    icon: '📬',
                });
                form.current?.reset();
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
        <form ref={form} onSubmit={sendEmail} className="px-4 pt-6 pb-12 bg-[#343944] text-white flex flex-col">
            <input hidden name="title" value="Tutoring" />
            <div className="flex flex-col w-full md:mx-14 md:w-2/3 md:flex-row md:gap-6">
                <div className="relative my-2 md:w-1/2">
                    <input type="name"
                           name="name"
                           className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-1 border-white text-white rounded-lg bg-transparent focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           required
                    />
                    <label htmlFor="name"
                           className="absolute bg-[#343944] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Name
                    </label>
                </div>

                <div className="relative my-2 md:w-1/2">
                    <input type="email"
                           name="email"
                           className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-1 border-white text-white rounded-lg bg-transparent focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           required
                    />
                    <label htmlFor="email"
                           className="absolute bg-[#343944] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Email
                    </label>
                </div>
            </div>

            <div className="relative my-2 md:w-2/3 md:mx-14">
                <input type="text"
                       name="subjects"
                       className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-1 border-white text-white rounded-lg bg-transparent focus:outline-none focus:ring-0 peer"
                       placeholder=" "
                />
                <label htmlFor="subjects"
                       className="absolute bg-[#343944] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                    Tutoring subject(s)
                </label>
            </div>

            <div className="relative my-2 md:w-2/3 md:mx-14">
                <textarea name="message"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-1 border-white text-white rounded-lg bg-transparent focus:outline-none focus:ring-0 peer resize-none"
                          placeholder=" "
                          rows={6}
                />
                <label htmlFor="message"
                       className="absolute bg-[#343944] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                    Message (optional)
                </label>
            </div>
            <button className="bg-[#ce4233] hover:bg-[#b83b2e] w-full h-12 rounded-lg font-black mt-2 cursor-pointer md:mx-14 md:w-[200px]"
                    disabled={isSending}
            >
                {isSending ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
}

export default Contact;