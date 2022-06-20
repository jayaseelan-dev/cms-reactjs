export const login = () => {
    return fetch('./assets/login.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}