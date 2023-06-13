import React, { useState } from 'react';

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
