export const checkValidData = (email, password, name) => { // Use Rejex for validation

    const isNameValid = /^[a-zA-Z][a-zA-Z\s]{1,20}[a-zA-Z]$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name is not valid";

   
    return null;
}