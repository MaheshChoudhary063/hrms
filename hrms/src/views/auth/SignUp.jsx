import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FcGoogle } from "react-icons/fc";

import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { SignUpSchema } from "helper/validationSchema";
import { withStateDispatch } from "api/withStateDispatch";
import { grantAdminPermission } from "helper";

const SignUp = (props) => {
  const { Register } = props;
  return (
    <div className="my-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:my-0 lg:items-center lg:justify-start">
      <Formik
        initialValues={{
          email: "",
          password: "",
          terms: false,
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          setSubmitting(true);
          const role = grantAdminPermission(email);
          Register(
            {
              email: email.replace("+admin", ""),
              password,
              role: role ? ["ADMIN"] : ["AGENT"],
            },
            () => {
              setSubmitting(false);
            },
            () => {
              setSubmitting(false);
            }
          );
        }}
      >
        {({ values, errors, isSubmitting, handleSubmit, handleChange }) => (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
          >
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign Up
            </h4>
            <p className="mb-6 ml-1 text-base text-gray-600">
              Enter your email and password to sign up!
            </p>
            <div className="mb-3 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                Sign Up with Google
              </h5>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
              <p className="text-base text-gray-600 dark:text-white"> or </p>
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            </div>

            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              state={errors.email && "error"}
              error={errors.email}
            />

            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              state={errors.password && "error"}
              error={errors.password || ""}
            />

            <Checkbox
              id="terms"
              name="terms"
              extra="mb-4"
              label="I agree terms and conditions"
              value={values.terms}
              onChange={handleChange}
              color={errors.terms ? "red" : "success"}
              error={errors.terms}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="linear mt-2 w-full rounded-xl bg-brand-900 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {isSubmitting ? "Creating your account..." : "Create a account"}
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Already have a account?
              </span>
              <Link
                to={"/auth/sign-in"}
                className="ml-1 text-sm font-medium text-brand-900 hover:text-brand-600 dark:text-white"
              >
                Sign In
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withStateDispatch(SignUp);
