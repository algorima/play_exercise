import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from 'components/Typography';
import Check from 'images/icon-check.svg';

const Exercise = ({
  data,
  onAnswerUpdate,
  answer,
  onExerciseSubmit,
  isCorrect,
}) => {
  return (
    <Item>
      <Title
        as="h3"
        type="subtitle3"
        fontWeight={500}
        marginBottom={21}
        paddingLeft={10}
      >
        {data.order}. {data.name}
      </Title>

      <OptionList>
        {data.documents?.map((option, optionIndex) => (
          <OptionWrapper key={optionIndex}>
            <Input
              id={`${data.id}-${option.id}`}
              value={option.id}
              name={data.id}
              type="checkbox"
              checked={answer.includes(option.id)}
              onChange={onAnswerUpdate}
            />
            <Label
              as="label"
              type="subtitle3"
              color="grey.600"
              textAlign="center"
              fontWeight={500}
              paddingTop={2}
              htmlFor={`${data.id}-${option.id}`}
            >
              {optionIndex + 1}
            </Label>
            <Option
              as="label"
              type="subtitle3"
              color="grey.300"
              fontWeight={500}
              marginLeft={34}
              htmlFor={`${data.id}-${option.id}`}
            >
              {option.value}
            </Option>
          </OptionWrapper>
        ))}
      </OptionList>
    </Item>
  );
};

export default Exercise;

Exercise.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    documents: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          id: PropTypes.number,
          value: PropTypes.string,
        }),
      ),
      PropTypes.oneOf(['']),
    ]),
    words: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isCorrect: PropTypes.bool,
  answer: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  onAnswerUpdate: PropTypes.func.isRequired,
  onExerciseSubmit: PropTypes.func.isRequired,
};
const Item = styled.li`
  width: 1000px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.border[100]};
  border-radius: 10px;
  padding: 30px 35px;
  & + & {
    margin-top: 20px;
  }
`;

const Title = styled(Typography)`
  font-family: Noto Sans KR;
`;

const OptionList = styled.ol`
  list-style: none;
  padding: 0;
`;

const OptionWrapper = styled.li`
  & + & {
    margin-top: 5px;
  }
`;

const Label = styled(Typography)`
  display: inline-block;
  font-family: Noto Sans KR;
  height: 35px;
  width: 32px;
  vertical-align: middle;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette.grey[600]};
  box-shadow: 4px 0 1px 0 ${({ theme }) => `${theme.palette.grey[500]}40`};
  cursor: pointer;
`;

const Input = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 4px 0 1px 0 ${({ theme }) => `${theme.palette.primary.hover}40`};
    background-image: url(${Check});
    background-size: 16.5px 13px;
    background-repeat: no-repeat;
    background-position: center center;
    color: rgba(0, 0, 0, 0);
  }

  &:checked + label + label {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Option = styled(Typography)`
  display: inline-block;
  font-family: Noto Sans KR;
  vertical-align: middle;
  cursor: pointer;
`;
