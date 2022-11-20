export default function Root() {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="w-1/4 h-screen bg-slate-200">
        <div className="flex flex-row justify-center py-5">
          <input
            type="text"
            placeholder="Search"
            name="q"
            id="q"
            className="px-6 py-2 shadow-md rounded-lg"
          />
          <form className="ml-2">
            <button className="px-4 py-2 bg-white shadow-md rounded-lg text-cyan-600">
              New
            </button>
          </form>
        </div>

        <nav className="flex px-8">
          <ul>
            <li>
              <a>Your name</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* details */}
      <div className="w-3/4 h-screen bg-slate-100"></div>
    </div>
  );
}
