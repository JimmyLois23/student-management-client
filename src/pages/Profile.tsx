import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

const Profile: React.FC = () => {
  const [aboutMe, setAboutMe] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setAboutMe("");
  };

  const handleSave = () => {
    localStorage.setItem("about", aboutMe);
    setIsEditing(false);
  };

  const name = localStorage.getItem("name");

  const type = localStorage.getItem("type");

  const about = localStorage.getItem("about");

  return (
    <>
      {type !== "Student" && <Breadcrumb pageName="Profile" />}

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-20">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {name ? name.toUpperCase() : type}
            </h3>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>

              {/* Display About Me section or input for editing */}
              {isEditing ? (
                <div className="mt-4">
                  <textarea
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent py-2 px-4 text-black dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    rows={5}
                  />
                  <div className="mt-4 flex justify-center space-x-4">
                    <button
                      onClick={handleSave}
                      className="rounded-lg border border-primary bg-primary px-6 py-2 text-white transition hover:bg-opacity-90"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="rounded-lg border border-red-500 bg-red-500 px-6 py-2 text-white transition hover:bg-opacity-90"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4.5">
                  <p>{about ? about : "* Please Enter About Yourself Here *"}</p>
                  <button
                    onClick={handleEdit}
                    className="mt-4 rounded-lg border border-primary bg-primary px-6 py-2 text-white transition hover:bg-opacity-90 font-semibold"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


