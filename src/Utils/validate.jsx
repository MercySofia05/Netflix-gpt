const validateData = (email, password) => {
    if(!email || !password){
        return "All fields are required";
    }
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!isEmailValid){
        return "Email is Invalid";
    }
    if(!isPasswordValid){
        return "Password is Invalid";
    }
}

export default validateData ;