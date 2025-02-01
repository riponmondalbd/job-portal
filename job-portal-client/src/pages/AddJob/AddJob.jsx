const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>
      <form className="card-body">
        <fieldset className="fieldset">
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
          {/* job type */}
          <label className="fieldset-label">Job Type</label>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a Job Type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
          {/* job field */}
          <label className="fieldset-label">Job Field</label>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
          {/* salary range */}
          <p className="mt-4">Salary Range</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="fieldset-label">Min</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Min"
              />
            </div>
            <div>
              <label className="fieldset-label">Max</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Max"
              />
            </div>
            <div>
              <label className="fieldset-label">Currency</label>
              <select defaultValue="Pick a color" className="select w-full">
                <option disabled={true}>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* job title */}
          <label className="fieldset-label">Job Description</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
          {/* Company name */}
          <label className="fieldset-label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />
          {/* requirements */}
          <label className="fieldset-label">Job Requirements</label>
          <input
            type="text"
            name="requirements"
            className="input w-full"
            placeholder="Put each requirements in a new line"
          />
          {/* responsibilities */}
          <label className="fieldset-label">Job Responsibilities</label>
          <input
            type="text"
            name="responsibilities"
            className="input w-full"
            placeholder="Write each responsibility in a new line"
          />
          {/* hr email */}
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          {/* hr name */}
          <label className="fieldset-label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />
          {/* company logo */}
          <label className="fieldset-label">Logo</label>
          <input
            type="text"
            name="logo"
            className="input w-full"
            placeholder="Logo"
          />
          {/* submit button */}
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
