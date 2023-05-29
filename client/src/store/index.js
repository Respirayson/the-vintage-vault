import { proxy } from 'valtio'
import { storeIcon } from '../assets';
import { data } from '../config/data';
import { shirt0 } from '../assets';

const state = proxy({

    intro: true,
    marketplace: false,
    createListing: false,
    color: '#b1adc3',
    isFullTexture: true,
    fullDecal: storeIcon,
    positionX: 0,
    positionY: 0,
    listings: [],
    mainImage: true,
    telegramHandle: '',
    rotationZ: 0,
    filteredCount: data.length,
});

const listing = {
    id: 0,
    name: "Levi Shirt",
    description: "10/10 Quality.",
    seller: "Ah Ma Thrifts",
    price: "28",
    url: shirt0,
    telegramHandle: 'respirayson',
    category: "Shirt"
}

for (let i = 0; i < data.length; i++) {
    state.listings.push(data[i]);
}

state.listings = [listing, ...state.listings]

export default state;