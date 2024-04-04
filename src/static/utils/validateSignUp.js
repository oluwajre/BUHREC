import { toast } from 'react-toastify';

export function validateSignUp() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const roleType = document.getElementById('role').value;
    const terms = document.getElementById('terms')
    // let firstName = document.getElementById('firstName').value;
    // let research = document.getElementById('research');
    // let submit = document.getElementById('sign-up-button');
    let isValid = true;

    if (password !== confirmPassword){
        toast.error('Confirm Password');
        isValid = false;
    }
    else if (roleType === ''){
        toast.error('Select a Role Type');
        isValid = false;
    }
    else if (checkResearchOptions() === false && checkReviewOptions() === false){
        toast.error('Fill out the Extra Information Below')
        isValid = false;
    }
    else if (!(terms.checked)){
        toast.error('Agree to Terms and Conditions')
        isValid = false;
    }

    return isValid

    
}

const checkReviewOptions = () => {
    let isValid = true;
    const staffType = document.getElementById('staff-type').value;
    const degree = document.getElementById('degree').value;

    if (staffType === '' || degree === ''){
        isValid = false;
    }

    return isValid;
}

const checkResearchOptions = () => {
    let isValid = true;
    const programType = document.getElementById('programType').value;
    const programDiscipline = document.getElementById('programDiscipline').value;

    if (programType === '' || programDiscipline === ''){
        isValid = false;
    }

    return isValid;
}




// if (password === confirmPassword && roleType !== '') {
    //     isValid = true;
    //     if (checkResearchOptions() == true || checkReviewOptions() == true){
    //         toast.success('success')
            
    //     }
        
    // }

    // else{
    //     toast.error('Please Confirm Password Again')
    // }