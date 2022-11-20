export default function EditContact() {
  return (
    <div>
      <form>
        {/* first last */}
        <div className="flex flex-row items-center">
          <div className="w-32">
            <p>Name</p>
          </div>

          <input
            placeholder="First"
            name="first"
            id="first"
            className="px-6 py-2 shadow rounded-lg border w-1/2"
          />
          <input
            placeholder="Last"
            name="last"
            id="last"
            className="px-6 py-2 shadow rounded-lg ml-4 border w-1/2"
          />
        </div>

        {/* twitter */}
        <div className="flex flex-row items-center mt-5">
          <div className="w-32">
            <p>Twitter</p>
          </div>
          <input
            placeholder="@jack"
            name="twitter"
            id="twitter"
            className="px-6 py-2 shadow rounded-lg border w-full"
          />
        </div>

        {/* avatar */}
        <div className="flex flex-row items-center mt-5">
          <div className="w-32">
            <p>Avatar URL</p>
          </div>
          <input
            placeholder="https://example.com/one.png"
            name="avatar"
            id="avatar"
            className="px-6 py-2 shadow rounded-lg border w-full"
          />
        </div>

        {/* notes */}
        <div className="flex flex-row items-center mt-5">
          <div className="w-32">
            <p>Notes</p>
          </div>
          <textarea
            name="notes"
            id="notes"
            className="px-6 py-2 shadow rounded-lg border w-full"
          />
        </div>

        {/* Submit and cancel button */}
        <div className="flex flex-row mt-4 pl-28">
          <button
            type="submit"
            className="px-4 py-2 bg-white shadow-md rounded-lg text-cyan-600 border"
          >
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-white shadow-md rounded-lg text-red-600 border ml-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
