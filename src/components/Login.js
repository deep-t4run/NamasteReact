import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <form
        onSubmit={formik.handleSubmit}
        className="p-6 bg-white rounded shadow-md"
      >
        <h2 className="mb-4 font-bold text-3xl text-left text-blue-700">
          Login
        </h2>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rouned shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="text-xs italic text-red-500">
            {formik.errors.name}
          </div>
        ) : null}

        <label
          htmlFor="email"
          className="block mt-4 mb-2 text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rouned shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="text-xs italic text-red-500">
            {formik.errors.email}
          </div>
        ) : null}

        <label
          htmlFor="password"
          className="block mt-4 mb-2 text-sm font-bold text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rouned shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {formik.errors.password && formik.touched.password ? (
          <div className="text-xs italic text-red-500">
            {formik.errors.password}
          </div>
        ) : null}
        <Link to="/">
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
