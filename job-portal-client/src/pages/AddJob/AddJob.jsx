const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>
      <form className="fieldset">
        {/* job title */}
        <label className="fieldset-label">Job Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="Job Title"
        />
        {/* job location */}
        <label className="fieldset-label">Job Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="Job Location"
        />
        {/* job location */}
        <label className="fieldset-label">Job Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="Job Location"
        />

        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default AddJob;
