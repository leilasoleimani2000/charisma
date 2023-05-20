export default interface IProducts {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: IRating;
    title: string;
}

interface IRating {
    count: number;
    rate: number;
}