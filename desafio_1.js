export default function formatFullName(fullName){
    let noSpareSpaceFullName = fullName.replace(/\s+/g, ' ').trim();

    const regexRemoveDigitAndSpecials = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\|\/]/g;

    let cleanedFullName = noSpareSpaceFullName.replace(regexRemoveDigitAndSpecials, '');

    let capitalizedFullName = capitalizeFullName(cleanedFullName);
    
    return capitalizedFullName;
}

function capitalizeFullName(fullName){
    const names = fullName.split(' ');
    const capitalizedNames = [];

    for(let i = 0; i < names.length; i++) {
        const capitalizedName = names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase();
        capitalizedNames.push(capitalizedName);
    }

    return capitalizedNames.join(' ');
}
