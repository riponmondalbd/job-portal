import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job Has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJob");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
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
          <select
            defaultValue="Pick a Job Type"
            name="jobType"
            className="select w-full"
          >
            <option disabled={true}>Pick a Job Type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
          {/* job field */}
          <label className="fieldset-label">Job Field</label>
          <select
            defaultValue="Pick a Job Field"
            name="category"
            className="select w-full"
          >
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
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Min"
              />
            </div>
            <div>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Max"
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
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Put each requirements in a new line"
            name="requirements"
            required
          ></textarea>
          {/* responsibilities */}
          <label className="fieldset-label">Job Responsibilities</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
          {/* hr email */}
          <label className="fieldset-label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            className="input w-full"
            placeholder="HR Email"
          />
          {/* application deadline */}
          <label className="fieldset-label">Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
            placeholder="Deadline"
          />
          {/* hr name */}
          <label className="fieldset-label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />
          {/* company logo */}
          <label className="fieldset-label">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
          {/* submit button */}
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
