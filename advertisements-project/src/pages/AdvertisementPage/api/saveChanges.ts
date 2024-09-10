import {Advertisment} from "../../../../server/types/types.ts";

const saveChanges = (data: Advertisment) => {
    return fetch(`http://localhost:3000/advertisements/${data.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to save changes');
            }
            console.log('Changes saved successfully');

        })
        .catch(error => {
            console.error('An error occurred while saving changes:', error);
            throw error;
        });
}

export default saveChanges;