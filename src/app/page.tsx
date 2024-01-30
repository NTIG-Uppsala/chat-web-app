export default function Home() {
  return (
    <div className="flex items-center justify-center my-8">
      <input></input>
      <form>
        <label>
          <input type="text" name="name" className="bg-slate-300" placeholder="Send Message" />
        </label>
        <button className="bg-slate-200 hover:bg-slate-300 rounded-md p-2">
          Send
        </button>
      </form>
    </div>
  );
}
