import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
    url?: string;
    name: string;
    description: string;
    imageUrls?: string[];
}

function fieldset({name, description, imageUrls}: Props) {
    return (
        <fieldset className="border p-3.5 rounded-sm">
            <legend className="font-bold">{name}</legend>
            <p className="pb-3.5">{description}</p>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                {imageUrls?.map((url, i) => (
                    <LazyLoadImage
                        key={i}
                        src={url}
                        alt="project screenshot"
                        className="rounded-sm w-full max-w-[450px] h-auto min-h-48 min-w-72"
                        placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KICA8cmFkaWFsR3JhZGllbnQgaWQ9ImExMiIgY3g9Ii42NiIgZng9Ii42NiIgY3k9Ii4zMTI1IiBmeT0iLjMxMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSgxLjUpIj4KICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgogICAgPHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIuOSIvPgogICAgPHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIuNiIvPgogICAgPHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIuMyIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxjaXJjbGUgdHJhbnNmb3JtLW9yaWdpbj0iY2VudGVyIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjYTEyKSIgc3Ryb2tlLXdpZHRoPSIzMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIyMDAgMTAwMCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjcwIj4KICAgIDxhbmltYXRlVHJhbnNmb3JtIHR5cGU9InJvdGF0ZSIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjIiIHZhbHVlcz0iMzYwOzAiIGtleVRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAgMCAxIDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm0tb3JpZ2luPSJjZW50ZXIiIGZpbGw9Im5vbmUiIG9wYWNpdHk9Ii4yIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiLz4KPC9zdmc+Cg=="
                    />
                ))}
            </div>
        </fieldset>
    );
}

function Project({url, name, description, imageUrls}: Props) {
    return (
        <div className="py-3.5">
            {url ? (
                <a href={url} target="_blank" title={url.substring(8)}>
                    {fieldset({name, description, imageUrls})}
                </a>
            ) : (
                <>
                    {fieldset({name, description, imageUrls})}
                </>
            )
            }
        </div>
    );
}

export default Project;