import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import emailjs from 'emailjs-com';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Succès",
      description: "Votre message a bien été envoyé!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = "";
    if (Object.keys(values).length === 3) {
        // emailjs.sendForm('service_v615c6j', 'template_u3qdzps', event.target, 'user_D8HIwFnZBRMjF6D8ZVKzN')
        console.log(errors);
        console.log(values)
        // .then((result) => {
        //     console.log(result.text);
        //     setShouldSubmit(true);
        // }, (error) => {
        //     setShouldSubmit(false);
        //     console.log(error.text);
        // });
    //   axios
    //     .post(url, {
    //       ...values,
    //     })
    //     .then(() => {
    //       setShouldSubmit(true);
    //     });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
