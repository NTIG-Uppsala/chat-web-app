import Message from "./messages";

export default function MessageSystem() {
    return (
        <div>
            <div className="flex justify-center my-8">
                <form>
                    <input type="text" name="name" className="bg-slate-300" placeholder="Send Message" />
                    <button className="bg-slate-200 hover:bg-slate-300 px-2">
                        Send
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
                <Message name="John Doe" message="Hello, how are you today?yfyiktfytfyujtfjytfjytfrftgyhujikoijuhygfcvgbhjiuhyhgtvbhjn" />
                <Message name="John Doe" message="Hello, how are you today?" />
            </div>
        </div>
    );
}