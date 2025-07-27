type Props = {
    url?: string;
    name: string;
    description: string;
    imageUrls?: string[];
}

function fieldset({ name, description, imageUrls }: Props) {
    return (
        <fieldset className="border p-3.5">
            <legend className="font-bold">{name}</legend>
            <p className="pb-3.5">{description}</p>
            <div className="grid grid-cols-1 justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3">
                {imageUrls?.map((url, i) => (
                    <img key={i} src={url} alt="project screenshot" width="450" className="rounded-sm"/>
                ))}
            </div>
        </fieldset>
    );
}

function Project({ url, name, description, imageUrls }: Props) {
    return (
        <div className="py-3.5">
            {url ? (
                <a href={url} target="_blank" title={url.substring(8)}>
                    {fieldset({ name, description, imageUrls })}
                </a>
            ) : (
                <>
                    {fieldset({ name, description, imageUrls })}\
                </>
            )
            }
        </div>
    );
}

export default Project;