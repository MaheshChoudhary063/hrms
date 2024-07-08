import { Formik } from "formik";
import { Link } from "react-router-dom";

import { withStateDispatch } from "api/withStateDispatch";
import InputField from "components/fields/InputField";
import { ForgotSchema } from "helper/validationSchema";

const ForgotPassword = (props) => {
  const { ForgotPassword } = props;
  return (
    <div className="my-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:my-0 lg:items-center lg:justify-start">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const { email } = values;
          ForgotPassword(
            { email },
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
              Forgot Password
            </h4>
            <p className="mb-6 ml-1 text-base text-gray-600">
              Enter your email to get login link!
            </p>
            {/* Email */}
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="linear mt-2 w-full rounded-xl bg-brand-900 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {isSubmitting ? "Please wait..." : "Forgot Password"}
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Remember Password?
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

export default withStateDispatch(ForgotPassword);
