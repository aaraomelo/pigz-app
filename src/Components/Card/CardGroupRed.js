import React from "react";
import Card from ".";
const cards = [
  {
    icon: 'Storefront',
    title: 'Marketplace',
    body: 'Pra sua loja vender mais'
  },
  {
    icon: 'Smartphone',
    title: 'É fácil e rápido',
    body: 'Fazer um pedido no Pigz'
  },
  {
    icon: 'Management',
    title: 'Pigz Gestão',
    body: 'Você no controle, sempre'
  },
  {
    icon: 'Print',
    title: 'Vias de impressão',
    body: 'Personalizáveis'
  },
];

export default function CardGroupRed() {
  return (
    <Card.Group className='card-group-red'>
        {cards.map((card, index) => (
          <Card.Red key={index} {...card} />
        ))}
    </Card.Group>
  );
}
