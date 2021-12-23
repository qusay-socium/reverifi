import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useForm } from 'react-hook-form';
import colors from 'styles/colors';
import verifyPhoneSchema from './verify-phone-form-schema';
import {
  ButtonsContainer,
  CancelButton,
  CodeContainer,
  DigitInput,
  FormContainer,
  InputsContainer,
  ResendButton,
  ResendCircleContainer,
  TimerText,
  VerifyButton,
} from './verify-phone-form.styles';

/**
 * Verify Phone form component.
 *
 * @return {JSX.Element}
 */
function VerifyPhoneForm() {
  const [resendCode, setResendCode] = useState(true);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(verifyPhoneSchema),
  });

  /**
   * Handle input function
   *
   * @param {object} target input object
   * @return {object}  next input object otherwise return
   */
  const handleInput = ({ target }) => {
    if (
      !Number.parseInt(target.value, 10) &&
      Number.parseInt(target.value, 10) !== 0
    ) {
      target.value = '';
      return;
    }
    if (target.nextSibling) {
      target.nextSibling.focus();
    }
  };

  /**
   * Handle form submit.
   *
   */
  const onSubmit = () => {
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CodeContainer>
        <InputsContainer>
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <DigitInput
              type="text"
              maxLength="1"
              autoComplete="off"
              key={num}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register(`d${index}`)}
              onInput={handleInput}
            />
          ))}
        </InputsContainer>

        <ResendCircleContainer>
          <CountdownCircleTimer
            key={resendCode}
            size={62}
            strokeWidth={7}
            isPlaying
            duration={150}
            colors={colors.green}
          >
            {({ remainingTime }) => (
              <TimerText>
                {Math.floor(remainingTime / 60)}:{remainingTime % 60}
              </TimerText>
            )}
          </CountdownCircleTimer>

          <ResendButton onClick={() => setResendCode(!resendCode)}>
            Resend Code
          </ResendButton>
        </ResendCircleContainer>
      </CodeContainer>

      <ButtonsContainer>
        <VerifyButton type="submit">Verify</VerifyButton>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonsContainer>
    </FormContainer>
  );
}

export default VerifyPhoneForm;
