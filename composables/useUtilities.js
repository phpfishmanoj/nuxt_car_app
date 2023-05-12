export const useUtilities = () => {
    function toTitleCase(str) {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    return {
        toTitleCase
    }
}