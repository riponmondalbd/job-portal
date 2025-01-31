import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
  };

  return (
    <div className="min-h-[70vh] hero">
      <div className="card bg-base-100 w-full shadow-2xl pt-8">
        <h1 className="text-5xl font-bold text-center">
          Apply Job and Good Luck!
        </h1>
        <form onSubmit={submitJobApplication} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">LinkedIn URl</label>
            <input
              type="url"
              name="linkedIn"
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
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
