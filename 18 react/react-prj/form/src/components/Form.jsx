import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (formData.email.trim() === "") {
      alert("Email is required");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (formData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Form Submitted Successfully!");

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email Address
          </label>

          <input
            type="email"
            className="form-control"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="form-text">
            We'll never share your email.
          </div>
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label htmlFor="Mobile" className="form-label">
            Mobile Number
          </label>

          <input
            type="tel"
            className="form-control"
            id="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;