const translateProps = props => {
  const newProp = 'This is new prop added through hoc';
  return {...props, newProp}
}
 
export function hocFunction(InputComponent) {
 return (inputCompnentProps) => {
   return InputComponent(translateProps(inputCompnentProps));
 }
}
