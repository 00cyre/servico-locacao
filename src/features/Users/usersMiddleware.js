const validateBodyUser = (req, res, next) => {
    try {
        let minor = isMinor(req.body.DataNascimento);
        let cpf = cpfValidator(req.body.Cpf);

        !cpf.data ? _throw(cpf.message) : true;
        !minor.data ? _throw(minor.message) : true;
        next();
    } catch (error) {
        throw error
    }
}
const _throw = (m) => { throw m; }
const _return = (m) => { return m; }
const isMinor = (bornDate) => {
    let age = (new Date() - new Date(bornDate)) / 1000 / 60 / 60 / 24 / 365;
    return age >= 18 ? { data: true, message: 'Ok' } : { data: false, message: 'Minors are not permitted to rent' }
}
const cpfValidator = (cpf) => {
    //Fonte https://www.geradorcpf.com/javascript-validar-cpf.htm 
    cpf = cpf.replace(/[^\d]+/g, '');
    let invalidMessage = "Invalid Cpf";
    let invalidCpfs = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]
    if (cpf == '') return { data: false, message: invalidMessage };
    // Elimina CPFs invalidos conhecidos	
    cpf.length != 11 || String(cpf).includes(invalidCpfs) ? _return({ data: false, message: invalidMessage }) : false
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return { data: false, message: invalidMessage };
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return { data: false, message: invalidMessage };
    return { data: true, message: invalidMessage };
}
module.exports = {
    validateBodyUser
}