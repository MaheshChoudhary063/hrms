import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "helper/validationSchema";
import { Formik } from "formik";
import { withStateDispatch } from "api/withStateDispatch";

const SignIn = (props) => {
  const { Login } = props;
  const navigate = useNavigate();
  return (
    <div className="my-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:my-0 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password, remember } = values;
          setSubmitting(true);
          Login(
            { email, password, remember },
            (res) => {
              navigate("/admin");
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
              Sign In
            </h4>
            <p className="mb-6 ml-1 text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            <div className="mb-3 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                Sign In with Google
              </h5>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
              <p className="text-base text-gray-600 dark:text-white"> or </p>
              <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            </div>
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

            {/* Password */}
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
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between">
              <Checkbox
                id="remember"
                name="remember"
                label="Keep me logged In"
                value={values.remember}
                onChange={handleChange}
                color={errors.remember ? "red" : "success"}
                error={errors.remember}
              />
              <Link
                to={"/auth/forgot-password"}
                className="text-sm font-medium text-brand-900 hover:text-brand-600 dark:text-white"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="linear mt-2 w-full rounded-xl bg-brand-900 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {isSubmitting ? "Signing in" : "Sign In"}
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <Link
                to={"/auth/sign-up"}
                className="ml-1 text-sm font-medium text-brand-900 hover:text-brand-600 dark:text-white"
              >
                Create an account
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withStateDispatch(SignIn);
