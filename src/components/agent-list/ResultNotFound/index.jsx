import { ReactComponent as ResultImage } from 'assets/result-not-found-agents.svg';
import React from 'react';
import { ResultContainer, TextContainer } from './result.styles';

export default function ResultNotFound() {
  const resultText =
    "We couldn't find anyone matching your search. Please adjust your filters and try again.";
  return (
    <ResultContainer>
      <TextContainer>{resultText}</TextContainer>
      <ResultImage />
    </ResultContainer>
  );
}
