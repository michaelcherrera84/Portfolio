import { type FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function ContactForm({title}: {title: string}) {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);


    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_GENERAL_TEMPLATE_ID,
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
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
            <input hidden name="title" value={title} />
            <label htmlFor="name" hidden />
            <input name="name" type="text" placeholder="Name" required
                   className="bg-white p-2 mt-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm"
            />
            <label htmlFor="email" hidden />
            <input name="email" type="email" placeholder="Email" required
                   className="bg-white p-2 mt-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#343944] placeholder-gray-400 text-gray-900 text-sm"
            />
            <label htmlFor="message" hidden />
            <textarea name="message" placeholder="Message" rows={6} required
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
    );
}

export default ContactForm;