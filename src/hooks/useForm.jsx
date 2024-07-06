import { useEffect, useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  //initialVlaues : 초기값
  // onSubmit: 성공시 로직
  // validate: 유효성검사 함수
  const [values, setValues] = useState(initialValues);
  const [messages, setMessages] = useState({});
  const [states, setStates] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const result = validate({ ...values, [name]: value });
    setValues({ ...values, [name]: value });
    setMessages(result.messages);
    setStates(result.states);
  };

  const handleSubmit = async (event) => {
    setSubmitting(true);
    onSubmit(values);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(messages).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [messages]);

  return { values, messages, submitting, states, handleChange, handleSubmit };
};

export default useForm;
