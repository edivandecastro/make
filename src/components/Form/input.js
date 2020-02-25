import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

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

  function addClassError(rest) {
    if (error) {
      rest.className = rest.className + ' form-error'
    }
    else {
      rest.className = rest.className.replace(' form-error', '');
    }
    return rest;
  }

  return (
    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...addClassError(rest)} />
      { error && <div className={"form-error"}>{error}</div> }
    </div>
  )
}
