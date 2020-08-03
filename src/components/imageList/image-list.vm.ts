export interface Image {
    id: number;
    description: string;
    image: string;
    buy: boolean;
    price: number;
}

export const createEmptyImageSession = (): Image => ({
    id: 0,
    buy: false,
    description: '',
    image: '',
    price: 0.0
});