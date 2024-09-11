import {useEffect, useState} from "react";

import {Order} from "../../../../server/types/types.ts";

const useGetOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllOrders = async () => {
            fetch('http://localhost:3000/orders')
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    setLoading(false);
                })
                .catch(err => console.error('An error occurred while fetching orders:', err));
        }

        fetchAllOrders();
    }, []);

    return {orders, loading};
};

export default useGetOrders;