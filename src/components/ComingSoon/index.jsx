import React from 'react';
import { ReactComponent as ComingSoonImage } from 'assets/images/coming-soon.svg';
import {
  ComingSoonContainer,
  ComingSoonDescription,
  ComingSoonItems,
  Title,
  Form,
  InputField,
  Button,
  ComingSoonSection,
} from './coming-soon.style';

function ComingSoon() {
  return (
    <ComingSoonContainer>
      <ComingSoonSection>
        <ComingSoonItems>
          <Title>reverifi is coming soon</Title>
          <ComingSoonImage />
          <ComingSoonDescription>
            We are very proud of the success and support reverifi received with
            our initial launch
          </ComingSoonDescription>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>Contact Us</p>
            <InputField type="text" id="name" name="name" placeholder="Name" />
            <InputField
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
            <Button type="submit">Send</Button>
          </Form>
        </ComingSoonItems>
      </ComingSoonSection>

      <ComingSoonSection>
        <ComingSoonImage />
      </ComingSoonSection>
    </ComingSoonContainer>
  );
}

export default ComingSoon;
