

const length=10;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;






function PasswordGenerator( length,
                            includeLowerCase,
                            includeUpperCase,
                            includeNumbers,
                            includeSymbols)
{
    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const specialChars="@#$%^&*()_+=-!{}[]|\?/<>,~`';:";


    let allowedPassword="";
    let password="";




    allowedPassword += includeLowerCase ? lowerCaseChars : "";
    allowedPassword += includeUpperCase ? upperCaseChars: "";
    allowedPassword += includeNumbers ? numbers : "";
    allowedPassword += includeSymbols ? specialChars : "";



    if(length<=0)
    {
        return (`Length of password must be atleast 1`)
    }
    
    if(allowedPassword.length===0)
    {
        return(`Atleast 1 set of characters needs to be selected. `)
    }

    for(let i=0; i<=length; i++)
    {
        let randomIndex= Math.floor(Math.random()* allowedPassword.length);
        password+=allowedPassword[randomIndex];
    }

    //console.log(allowedPassword);


    return (password);
    


}



const Password=PasswordGenerator( length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
console.log(Password);



