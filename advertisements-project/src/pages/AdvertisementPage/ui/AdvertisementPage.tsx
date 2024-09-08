import AdvertisementCard from "../../../widgets/AdvertisementCard/AdvertisementCard.tsx";

const AdvertisementPage = () => {
    return (
        <div>
            <AdvertisementCard advertisement={{
                "id": "1",
                "name": "Стул старинный",
                "description": "Очень красивый",
                "price": 2000,
                "createdAt": "2022-08-12T20:16:55.351Z",
                "views": 20,
                "likes": 2,
                "imageUrl": ""
            }}></AdvertisementCard>
        </div>
    );
};

export default AdvertisementPage;