let lastId: number = 0;
try {
  lastId = await fetch("http://localhost:3000/advertisements")
    .then((res) => res.json())
    .then((data) => data.length);
} catch (e) {
  console.log(e);
}

export const getNextId = () => {
  lastId += 1;
  return lastId.toString();
};
