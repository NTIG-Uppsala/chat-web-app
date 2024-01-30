export default function Messages(props: { name: string, message: string }) {
    return (
        <div>
            <div className="border rounded-md p-4 m-4 w-96 bg-white break-words">
                <div className="font-bold text-gray-800">{props.name}</div>
                <div className="text-gray-600">{props.message}</div>
            </div>
        </div>
    );
}