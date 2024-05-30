import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { icons } from "../../assets/icons";
import { Switch } from "antd";
const EditProfile = () => {
  const [photo, setPhoto] = useState(null);

  const initialValues = {
    website: "",
    bio: "",
    gender: "",
  };

  const validationSchema = Yup.object().shape({
    website: Yup.string().url("Invalid URL"),
    bio: Yup.string().max(150, "Bio must be at most 150 characters"),
    gender: Yup.string().required("Please select a gender"),
  });

  const handlePhotoChange = (event: any) => {
    setPhoto(event.currentTarget.files[0]);
  };
  const handleSubmit = (values, actions) => {
    console.log("Form values:", values);
    actions.setSubmitting(false);
  };
  return (
    <div className="w-[706px] m-auto py-9 px-12 sm:px-6 h-full overflow-y-scroll">
      <span className="text-xl font-bold">Edit Profile</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6 ">
            <div className="w-[658px] h-[88px] p-4 mt-12 rounded-[20px] bg-[#EFEFEF] flex items-center md:flex md:items-center md:justify-between">
              <div className="w-14 bg-white rounded-[50%] md:flex-shrink-0">
                <img
                  src={photo ? URL.createObjectURL(photo) : icons.defaultAvatar}
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-col ml-4 w-[375px] md:mt-0 md:ml-6 md:flex md:flex-col md:items-start">
                <span className="text-base font-bold">nguyenname038</span>
                <span className="text-sm text-[#737373]">username20</span>
              </div>
              <label
                htmlFor="photo"
                className="w-[126px] font-semibold text-[14px] bg-[#0095F6] text-white rounded-[8px] text-center md:mt-0 md:ml-4 md:flex-shrink-0 md:inline-block  md:w-auto px-4 md:px-6 md:py-3"
              >
                Change Photo
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-base font-bold mt-2"
              >
                Website
              </label>
              <Field
                type="text"
                name="website"
                placeholder="Website"
                className="w-[658px] px-4 py-2 bg-[#EFEFEF] text-base border rounded-[10px]"
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <p className="text-[12px] text-[#737373] mt-2">
                Editing your links is only available on mobile. Visit the
                Instagram app and edit your profile to change the websites in
                your bio.
              </p>
            </div>

            <div>
              <label htmlFor="bio" className="block text-base font-bold mt-2">
                Bio
              </label>
              <Field
                as="textarea"
                name="bio"
                rows="2"
                placeholder="Bio"
                className="w-full py-2 border px-3 rounded-[15px]"
              />
              <ErrorMessage
                name="bio"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-base font-bold mt-2"
              >
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="w-full py-2 px-4 border  border-gray-300 rounded-lg text-base bg-white appearance-none"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <p className="text-sm text-gray-500 mt-2">
                This won’t be part of your public profile.
              </p>
            </div>

            <div>
              <label className="block text-base font-bold mt-2">
                Show account suggestions on profiles
              </label>
              <div className="w-full py-2 px-4 border rounded-[15px]">
                <div className="w-full flex items-center">
                  <div>
                    <span className=" text-[16px]">
                      Show account suggestions on profiles
                    </span>
                    <p className="text-[12px] text-[#737373] mt-1">
                      Choose whether people can see similar account suggestions
                      on your profile, and whether your account can be suggested
                      on other profiles.
                    </p>
                  </div>
                  <Field name="accountSuggestions">
                    {({ field, form }) => (
                      <Switch
                        checked={field.value}
                        onChange={(checked) =>
                          form.setFieldValue("accountSuggestions", checked)
                        }
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-lg mt-4"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p className="mb-2">Meta</p>
        <p className="mb-2">
          About · Blog · Jobs · Help · API · Privacy · Terms · Locations ·
          Instagram Lite · Threads · Contact Uploading & Non-Users · Meta
          Verified
        </p>
        <p className="mb-2">English</p>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default EditProfile;
