interface ViewProps {
    data: Array<Map<String, Object>>,
    name: String,
    iconUrl: String,
}

const View = ({
    data,
    name,
    iconUrl,
}: ViewProps) => {
    return <div>
        <span>Pokemon's name is ${name}</span>
    </div>
}

export default View;