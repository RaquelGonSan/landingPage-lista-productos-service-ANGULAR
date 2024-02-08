export const productsList: Product[] = [
    {
        id: 1,
        name: 'Fregona',
        price: 5,
        description: 'de Plastico resistente'
    },
    {
        id: 2,
        name: 'Detergente',
        price: 3,
        description:'Botella de 1 litro'
    },
    {
        id: 3,
        name: 'Balleta',
        price: 2,
        description:'Gran absorcion'
    },
    {
        id: 4,
        name: 'KH7',
        price: 4,
        description:'Quita grasas multiusos'
    },
    {
        id: 5,
        name: 'Escoba',
        price: 6,
        description:''
    },
    {
        id: 6,
        name: 'Plumero',
        price: 7,
        description:'Atrapa el polvo'
    },
    {
        id: 7,
        name: 'Limpia Muebles',
        price: 2,
        description:'Para las superficies de madera'
    }

]

export interface Product {
    id: number | string,
    name: string,
    price: number,
    description: string

}