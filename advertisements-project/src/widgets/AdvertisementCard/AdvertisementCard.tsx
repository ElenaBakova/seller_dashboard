import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import type {Advertisment} from '../../../server/types/types.ts'
import Likes from "../../shared/ui/Likes";
import Views from "../../shared/ui/Views";
import Price from "../../shared/ui/Price";

interface AdvertisementCardProps {
    advertisement: Advertisment;
}

const AdvertisementCard = ({advertisement}: AdvertisementCardProps) => {
    return (
        <Card sx={{minWidth: 240}}>
            <CardActionArea>
                {/* Advertisement image */}
                <CardMedia
                    component="img"
                    height="240"
                    width="240"
                    image={advertisement.imageUrl || "/no-image.png"}
                    alt={advertisement.name}
                />

                <CardContent>
                    {/* Advertisement name */}
                    <Typography component="p" color={"secondary"} fontWeight="bold" fontSize={16}>
                        {advertisement.name}
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardContent>
                {/* Item price */}
                <Price price={advertisement.price}/>

                {/* Advertisement likes */}
                <Likes likesCount={advertisement.likes}/>

                {/* Advertisement views */}
                <Views viewsCount={advertisement.views}/>
            </CardContent>
        </Card>
    );
}

export default AdvertisementCard;