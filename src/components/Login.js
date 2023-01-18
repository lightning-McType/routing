import axios from "axios";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { userLoginSchema } from "../schemas/userValidation";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      const res = await axios.post("http://localhost:8081/user/login", {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/products");
      } else {
        alert("Incorrect email or password");
      }
    },
  });
  return (
    <div className="p-2">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <div className="d-flex justify-content-center mt-4">
          <button className="submit-button" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
