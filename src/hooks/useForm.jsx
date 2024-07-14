import { useEffect, useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  //initialVlaues : 초기값
  // onSubmit: 성공시 로직
  // validate: 유효성검사 함수
  const [values, setValues] = useState(initialValues);
  const [messages, setMessages] = useState({});
  const [states, setStates] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (validate) {
      const result = validate({ ...values, [name]: value });
      setMessages(result.messages);
      setStates(result.states);
    }
    setValues({ ...values, [name]: value });

    console.log({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    const newResponse = await onSubmit(values);
    setResponse(newResponse);
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

  return {
    values,
    messages,
    submitting,
    states,
    handleChange,
    handleSubmit,
    response,
  };
};

export default useForm;
