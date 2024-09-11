let lastId: number = await fetch('http://localhost:3000/advertisements').then(res => res.json())
    .then(data => data.length);

export const getNextId = () => {
    lastId += 1;
    return lastId.toString();
}