import { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <section className="min-h-[50vh] relative bg-[url('../../imgs/call-center.jpg')] contact-us-1">
        <div className=" bg-[#0000005e] absolute w-full h-full inset-0"></div>
      </section>
      <section className="container mx-auto text-black px-4 py-8 bg-white -translate-y-20 rounded-2xl shadow-lg shadow-gray-600">
        <h3 className="main-title !mb-16 ">Let's Get in Contact</h3>

        <div className="lg:flex justify-evenly gap-3 ">
          <div className=" lg:w-1/4">
            <img src="https://picsum.photos/400" alt="" />
          </div>

          <div className="text-black lg:w-2/4">
            <form className="my-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea textarea-bordered resize-none block w-full"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className="mb-4">
                <button className="btn btn-success w-full text-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
