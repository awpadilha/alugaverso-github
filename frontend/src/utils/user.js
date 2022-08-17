export const getUserInitials = (userName) => {
    if (userName) {
        const [firstNameInitial, lastNameinitial] = userName.split(' ').map(item => item.substring(0,1))

        return `${firstNameInitial}${lastNameinitial}`
    }
    
    return ''
}