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
                        className="rounded-sm w-full max-w-[450px] h-auto"
                        placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjQiIGQ9Ik0yMCA0YTE2IDE2IDAgMSAwIDE2IDE2IiBzdHJva2UtZGFzaGFycmF5PSI1LjI3MjczOTczNzMzMDYzNzIsNS4yNzI3Mzk3MzczMzA2MzczIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgLz48L3N2Zz4="
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