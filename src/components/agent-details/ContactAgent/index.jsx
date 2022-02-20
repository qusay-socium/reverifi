import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/shared/Button';
import FormInput from 'components/shared/FormInput';
import TextAreaInput from 'components/shared/FormTextArea';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  handleNumberInput,
  handleTextInput,
  toUpperCaseFirstLetter,
} from 'utils/helpers';
import contactAgentSchema from './contact-agent-schema';
import { Form } from './contact-agent.style';

/**
 * Contact Agent Form component.
 *
 * @return {JSX.Element}
 */
function ContactAgent({ name }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(contactAgentSchema),
  });

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = () => {};

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Contact {toUpperCaseFirstLetter(name)}</h2>
      <FormInput
        error={errors.name?.message}
        label="Name"
        name="name"
        placeholder="eg: Jhon Doe"
        register={register}
        maxLength="30"
        onChange={handleTextInput}
      />
      <FormInput
        label="Phone Number"
        name="phone"
        placeholder="(201)555-0123"
        register={register}
        error={errors.phone?.message}
        type="text"
        maxLength="15"
        onChange={handleNumberInput}
      />
      <FormInput
        error={errors.email?.message}
        label="Email"
        name="email"
        placeholder="eg: Jhon@domain.com"
        register={register}
        onChange={() => {
          setFocus('email');
        }}
      />
      <TextAreaInput
        name="message"
        label="Message"
        rounded={false}
        limit={140}
        register={register}
        error={errors.message?.message}
        onChange={() => {
          setFocus('message');
        }}
      />
      <Button ariaLabel="Contact" type="submit">
        Contact
      </Button>
    </Form>
  );
}

ContactAgent.defaultProps = {
  name: '',
};

ContactAgent.propTypes = {
  name: PropTypes.string,
};

export default ContactAgent;
