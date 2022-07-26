import React from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Please input your password!"),
  email: Yup.string()
    .email("Please provide a valid email address!")
    .required("Please input your email!"),
});

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (values, actions) => {
    console.log("values", values);
    router.replace('/')
  };

  return (
    <div className="flex items-center justify-center h-screen px-3 min-h-100vh">
      <div className="absolute inset-0 min-h-0 pl-[30%] flex flex-col overflow-hidden z-0">
        {" "}
        <span className="bg-[#ef233c] w-[30rem] h-[25rem] rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96" />{" "}
        <span className="bg-[#04868b] w-[35rem] h-[25rem] ml-10 -mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96 nc-animation-delay-2000" />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={handleLogin}
      >
        {(props) => {
          console.log("props", props);
          return (
            <div className="w-full max-w-md">
              <Form
                onSubmit={props.handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 shadow-lg bg-slate-100/50 dark:bg-slate-100/10 backdrop-filter backdrop-blur-lg rounded-3xl"
              >
                <h1 className="text-2xl font-bold text-center text-gray-600 dark:text-gray-100">
                  Sign In
                </h1>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Field
                      id="email"
                      name="email"
                      placeholder="example@hcmute.edu.vn"
                      className={
                        "appearance-none border-2 rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none text-sm bg-white " +
                        (props.errors.email && props.touched.email
                          ? "border-red-500"
                          : "border-green-500")
                      }
                      type="text"
                    />
                    {props.errors.email && props.touched.email ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute icon icon-tabler icon-tabler-alert-triangle right-2 top-1/2"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ff2825"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transform: "translateY(-50%)" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9v2m0 4v.01" />
                        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                      </svg>
                    ) : props.dirty && !props.errors.email ? (
                      <div className="absolute flex items-center justify-center w-5 h-5 -translate-y-1/2 bg-green-500 rounded-full right-2 top-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-check"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  {props.errors.email && props.touched.email ? (
                    <div className="flex items-center mt-2 text-sm text-red-600">
                      {props.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      placeholder="********"
                      className={
                        "appearance-none border-2 rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none text-sm bg-white " +
                        (props.errors.password && props.touched.password
                          ? "border-red-500"
                          : "border-green-500")
                      }
                      type="password"
                      autoComplete="new-password"
                    />
                    {props.errors.password && props.touched.password ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute icon icon-tabler icon-tabler-alert-triangle right-2 top-1/2"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ff2825"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transform: "translateY(-50%)" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9v2m0 4v.01" />
                        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                      </svg>
                    ) : props.dirty && !props.errors.password ? (
                      <div className="absolute flex items-center justify-center w-5 h-5 -translate-y-1/2 bg-green-500 rounded-full right-2 top-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-check"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  {props.errors.password && props.touched.password ? (
                    <div className="flex items-center mt-2 text-sm text-red-600">
                      {props.errors.password}
                    </div>
                  ) : null}
                  {/* <ErrorMessage name="password" /> */}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center justify-center px-10 py-2 font-semibold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed"
                    type="submit"
                    disabled={props.isSubmitting || !props.isValid}
                  >
                    {props.isSubmitting && (
                      <svg
                        className="w-5 h-5 mr-2 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                    Sign in
                  </button>
                  <a
                    className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                  Don&#39;t have an account?{" "}
                  <a
                    href="#"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                  >
                    {" "}
                    Sign up
                  </a>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginPage;
