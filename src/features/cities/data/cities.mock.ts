import { officeSpaces } from "../../offices/data/officeSpaces.mock";
import { City } from "../types/city.types"


const cityNames =[
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Medan",
    "Semarang",
    "Makassar",
    "Bekasi",
    "Depok"
];

export const cities: City[] = cityNames.map((name, i) => {
    const officeCount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officeCount: officeCount,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, "-")
    }
});