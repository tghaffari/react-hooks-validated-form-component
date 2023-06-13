# react-validated-input-component

Using React to build a form input with validation.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

### Note

**This challenge is not intended to test your ability to Google a tutorial. Only use official documentation and the skills you've learned so far to build your solution.**

## Challenge

Use React and CSS to create a `ValidatedInput` component that displays its validation status **as the user types** (not when the form is submitted).

### Project Structure

```shell
react-validated-input-component/
├── dist
│   ├── index.html
│   └── styles.css
├── package.json
├── src
│   ├── index.jsx           <-- import and mount component
│   └── validated-input.jsx <-- define and export component
└── webpack.config.js
```

### Mockup

<p align="center">
  <img src="assets/validated-input.png"/>
</p>

### References

- [State](https://beta.reactjs.org/learn/state-a-components-memory)
- [Responding to Events](https://beta.reactjs.org/learn/responding-to-events)
- [Conditional Rendering](https://beta.reactjs.org/learn/conditional-rendering)
- [`<input>`](https://beta.reactjs.org/reference/react-dom/components/input)
- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery) - (CSS link [here](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css))
- [Regexr](https://regexr.com/)

### Extra

Add a validation rule that requires the user's password to contain:
  - a digit
  - a capital letter
  - a special character (`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, or `)`)

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).
