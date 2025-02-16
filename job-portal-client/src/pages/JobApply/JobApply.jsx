import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();

  //   console.log(id, user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch(`http://localhost:5000/job-applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Apply A Job!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <h1 className="text-5xl font-bold text-center mt-4">
        Apply Job And Good Luck!
      </h1>
      <div className="card-body">
        <form onSubmit={submitJobApplication} className="fieldset">
          <label className="fieldset-label">LinkedIn URL</label>
          <input
            type="url"
            name="linkedin"
            className="input w-full"
            placeholder="LinkedIn URL"
          />
          <label className="fieldset-label">Github URL</label>
          <input
            type="url"
            name="github"
            className="input w-full"
            placeholder="Github URL"
          />
          <label className="fieldset-label">Resume URL</label>
          <input
            type="url"
            name="resume"
            className="input w-full"
            placeholder="Resume URL"
          />

          <button className="btn btn-neutral mt-4">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
