import React, { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(validate(''));

  function handleChange(e) {
    setPassword(e.target.value);
    setError(validate(e.target.value));
  }

  function validate(value) {
    const trimmedValue = value.trim();
    const characterRequirements = /([A-Z])/g;
    const digitRequirements = /\d/g;
    const specialCharacterRequirements = /[!@#$%^&*()]/g;

    if (!trimmedValue) return 'A password is required';
    if (trimmedValue.length < 8) return 'Password must be at least 8 characters';
    if (characterRequirements.test(value) && digitRequirements.test(value) && specialCharacterRequirements.test(value)) {
      return null;
    } else return 'Password must contain a capital letter, a number, and a special character.';
  }

  const validationClassName = error ? 'fa-x error-symbol' : 'fa-check check-symbol';

  return (
    <div className='container'>
      <form action="" >
        <label htmlFor='password'> Password </label>
        <input id='password' type="password" value={password} onChange={handleChange} />
        <i className={`fa-solid ${validationClassName}`}></i>
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>
  );
}

// export default function ValidatedInput() {
//   const [value, setValue] = useState('');
//   const [error, setError] = useState(validate(''));

//   function validate(value) {
//     const trimmed = value.trim();
//     if (!trimmed) return 'A password is required.';
//     if (trimmed.length < 8) return 'Your password is to short.';
//     if (/\d/g.test(trimmed) &&
//       /[A-Z]/g.test(trimmed) &&
//       /[!@#$%^&*()]/g.test(trimmed)) {
//       return null;
//     }
//     return 'Password must contain a number, a capital, and a special character.';
//   }

//   function handleChange(event) {
//     const { value } = event.target;
//     const error = validate(value);
//     setValue(value);
//     setError(error);
//   }

//   const validationClass = error ? 'is-invalid' : 'is-valid';
//   return (
//     <div className="form-group position-relative m-5">
//       <label htmlFor="password">Password</label>
//       <input
//         value={value}
//         id="password"
//         type="password"
//         placeholder="********"
//         onChange={handleChange}
//         className={`form-control ${validationClass}`} />
//       {
//         error &&
//         <div className="invalid-tooltip">{error}</div>
//       }
//     </div>
//   );
// }
