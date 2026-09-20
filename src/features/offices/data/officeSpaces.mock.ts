import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] =[
    {
        id: 1,
        title: 'Gowork Jakarta',
        slug: 'gowork-jakarta',
        price: 18560000,
        duration: '20 days',
        location: 'Jakarta Pusat',
        rating: 4.5,
        address: 'Dekat gedung BWA HQ di Jakarta no 102939',
        image: '/assets/images/thumbnails/thumbnails-1.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-3.png'
        ],
        tags: ['Popular'],
        about: 'Whether you need quite private space away from distractions or collaborate person...',
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility', 'Extra Snacks', 'Compact'],
        isFullyBooked: true,
        salesContacts: [
            {
                name: 'Mayasoshi',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                name: 'Puji Ovina',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-2.png'
            }
        ]
    },
    {
        id: 2,
        title: 'Pondok Pekerja Remote Surabaya',
        slug: 'pondok-pekerja-remote-surabaya',
        price: 7650000,
        duration: '20 days',
        location: 'Surabaya',
        rating: 4.8,
        address: 'Dekat gedung BWA HQ di SBY no 102939',
        image: '/assets/images/thumbnails/thumbnails-3.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-3.png'
        ],
        tags: ['Popular', 'Cheaper'],
        about: 'Whether you need quite private space away from distractions or collaborate person...',
        features: ['Global Event', 'Privacy', 'Extra Snacks', 'Compact'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: 'Rinda',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                name: 'Amara Ovina',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-2.png'
            },
            {
                name: 'Ikuza Ovina',
                role: 'Sales Manager',
                photo: '/assets/images/photo/photo-2.png'
            }
        ]
    }
]