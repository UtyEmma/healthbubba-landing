export const toNumber = (num) => {
    if(typeof num == 'number') return num;
    return parseInt(num)
}