export async function fetchData(file) {
    const response = await fetch(file).then(value => { return value });
    const parsedJson = await response.json().then(value => { return value });

    return Promise.resolve(parsedJson);
}
