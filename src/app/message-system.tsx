import Message from "./messages";

function InputWithButton(props: { name: string, placeholder: string, buttonText: string}) {
  return (
    <>
      <input type="text" name={props.name} className="bg-slate-300 m-2" placeholder={props.placeholder} />
        <button className="bg-slate-200 hover:bg-slate-300 px-2">
          {props.buttonText}
        </button>
    </>
  );
}

export default function MessageSystem() {
  return (
    <div>
      <div className="flex justify-center my-8">
        <form>
          <InputWithButton name="username" placeholder="Choose a username" buttonText="Confirm"></InputWithButton>
          <br />
          <InputWithButton name="message" placeholder="Send Message" buttonText="Send"></InputWithButton>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Message name="Name Here" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam delectus reiciendis tempora porro amet!" />
      </div>
    </div>
  );
}