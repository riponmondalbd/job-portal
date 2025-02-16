const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);

    newJob.salaryRange = {
      min,
      max,
      currency,
    };
  };
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>
      <form onSubmit={handleAddJob} className="fieldset">
        {/* job title */}
        <label className="fieldset-label">Job Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="Job Title"
          required
        />
        {/* job location */}
        <label className="fieldset-label">Job Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="Job Location"
          required
        />
        {/* job type */}
        <label className="fieldset-label">Job Type</label>
        <select
          defaultValue="Pick a Job type"
          name="job_type"
          className="select w-full"
        >
          <option disabled={true}>Pick a Job type</option>
          <option>Full-time</option>
          <option>Intern</option>
          <option>Part-time</option>
        </select>
        {/* job category */}
        <label className="fieldset-label">Job Category</label>
        <select
          defaultValue="Pick a Job Category"
          name="category"
          className="select w-full"
        >
          <option disabled={true}>Pick a Job Category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
        </select>
        {/* salary range */}
        <label className="fieldset-label">Salary Range</label>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <input
              type="number"
              name="min"
              className="input w-full"
              placeholder="Min"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="max"
              className="input w-full"
              placeholder="Max"
              required
            />
          </div>
          <div>
            <select
              defaultValue="Currency"
              name="currency"
              className="select w-full"
            >
              <option disabled={true}>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* job description */}
        <label className="fieldset-label">Job Description</label>
        <textarea
          className="textarea w-full"
          placeholder="Job Description"
          name="description"
          required
        ></textarea>
        {/* company name */}
        <label className="fieldset-label">Company Name</label>
        <input
          type="text"
          name="company"
          className="input w-full"
          placeholder="Company Name"
          required
        />
        {/* requirements */}
        <label className="fieldset-label">Job Requirements</label>
        <textarea
          className="textarea w-full"
          placeholder="Put each Requirements in a one line"
          name="requirements"
          required
        ></textarea>
        {/* responsibilities */}
        <label className="fieldset-label">Job Responsibilities</label>
        <textarea
          className="textarea w-full"
          placeholder="Put each Responsibilities in a one line"
          name="responsibilities"
          required
        ></textarea>
        {/* hr name */}
        <label className="fieldset-label">HR Name</label>
        <input
          type="text"
          name="hr_name"
          className="input w-full"
          placeholder="HR Name"
          required
        />
        {/* hr email */}
        <label className="fieldset-label">HR Email</label>
        <input
          type="email"
          name="hr_email"
          className="input w-full"
          placeholder="HR Email"
          required
        />
        {/* company logo */}
        <label className="fieldset-label">Company Logo URL</label>
        <input
          type="url"
          name="company_logo"
          className="input w-full"
          placeholder="Company Logo URL"
          required
        />

        {/* submit button */}
        <button className="btn btn-neutral mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;
