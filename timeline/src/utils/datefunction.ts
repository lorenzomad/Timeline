export const differenceInDays = (start: Date, end: Date) => {
    const timeDifference = end.getTime() - start.getTime() 
    const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));

    return daysDifference
}