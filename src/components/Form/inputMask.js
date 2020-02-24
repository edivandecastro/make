import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import InputMask from "react-input-mask";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
  )
}
