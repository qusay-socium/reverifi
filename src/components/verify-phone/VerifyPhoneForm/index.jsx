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
  DigitInputsContainer,
  FormContainer,
  InputsWrapper,
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
  const message = `Didn't receive a code? Send it again`;

  const { register, handleSubmit, reset, setFocus } = useForm({
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
    // when 3rd input focused we focused the 4th (because  above logic (nexSibling won't work))
    if (target.name === 'd2') {
      setFocus('d3');
    }
  };

  /**
   * Handle form submit.
   */
  const onSubmit = () => {
    reset();
  };

  /**
   * reset inputs when click on cancel
   */
  const resetInputs = () => {
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CodeContainer>
        <InputsWrapper>
          <DigitInputsContainer>
            {[0, 1, 2].map((num) => (
              <DigitInput
                type="text"
                maxLength="1"
                autoComplete="off"
                key={num}
                {...register(`d${num}`)}
                onInput={handleInput}
              />
            ))}
          </DigitInputsContainer>
          <DigitInputsContainer>
            {[3, 4, 5].map((num) => (
              <DigitInput
                type="text"
                maxLength="1"
                autoComplete="off"
                key={num}
                {...register(`d${num}`)}
                onInput={handleInput}
              />
            ))}
          </DigitInputsContainer>
        </InputsWrapper>
        <ResendCircleContainer>
          <CountdownCircleTimer
            key={resendCode}
            size={58}
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
            {message}
          </ResendButton>
        </ResendCircleContainer>
      </CodeContainer>

      <ButtonsContainer>
        <VerifyButton type="submit">Verify</VerifyButton>
        <CancelButton type="button" onClick={resetInputs}>
          Cancel
        </CancelButton>
      </ButtonsContainer>
    </FormContainer>
  );
}

export default VerifyPhoneForm;
