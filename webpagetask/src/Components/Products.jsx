import React from 'react';

const CLOTHING_DATA = [
    {
        id: 1,
        name: 'Classic Linen Blazer',
        price: '$120',
        img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600'
    },
    {
        id: 2,
        name: 'Over-sized Heavyweight Tee',
        price: '$45',
        img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600'
    },
    {
        id: 3,
        name: 'Tailored Trouser Pants',
        price: '$85',
        img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600'
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 px-[8%] bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-[2px] text-[#1a1a1a]">FEATURED COLLECTION</h2>
                <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {CLOTHING_DATA.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg mb-4">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                        <p className="text-[#d4af37] font-semibold mt-1">{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}