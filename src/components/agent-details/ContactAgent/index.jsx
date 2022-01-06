import Button from 'components/shared/Button';
import React from 'react';
import { Form, InputField, Label, TextArea } from './contact-agent.style';

/**
 * Contact Agent Form component.
 *
 * @return {JSX.Element}
 */
function ContactAgent() {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Contact John Doe</h2>
      <InputField type="text" id="name" name="name" placeholder="Name" />
      <InputField
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone Number"
      />
      <InputField type="email" id="email" name="email" placeholder="Email" />
      <div>
        <Label htmlFor="message">
          <p>Message</p>
          <span>(max 140 chars)</span>
        </Label>
        <TextArea id="message" />
      </div>
      <Button ariaLabel="Contact" onClick={() => {}}>
        Contact
      </Button>
    </Form>
  );
}

export default ContactAgent;
