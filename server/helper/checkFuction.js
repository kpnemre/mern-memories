const checkFunction = (res, variable, message, code = 400) => {
    if (variable) {
        if (typeof message == String)
            return res.status(code).json({ errors: [{ message }] });
        else {
            return res.status(code).json({ errors: message });
        }
    }
}

export default checkFunction;