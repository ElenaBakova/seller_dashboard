import {Advertisment} from "../../../server/types/types.ts";

const createAdvertisement = async (data: Advertisment) => {
    try {
        const res = await fetch(`http://localhost:3000/advertisements`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        if (res.ok) {
            console.log('Advertisement created successfully');
        }
    } catch (error) {
        console.error('An error occurred while creating advertisement:', error);
        throw error;
    }
}

export default createAdvertisement;