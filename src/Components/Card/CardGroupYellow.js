import React from "react";
import Card from ".";
const cards = [
  {
    title: 'Pigz',
    subtitle: 'Tudo o que você precisa',
    body: [
      'Pigz Marketplace',
      'Página exclusiva Pigz',
      'Gestão Desktop e Mobile',
      'Gestão de entregadores',
      'Vias de impressão personalizáveis',
    ],
    price: 'R$199/mês',
    button: 'Vender no Pigz agora',
  },
  {
    title: 'Pagamento On-line',
    subtitle: 'Segurança e agilidade',
    body: [
      'Aceite Pix e Cartão de Crédito',
      'Antecipação Pix automática',
      'Não dependa de maquininha de cartão',
      'Segurança para receber pedidos',
      'Agilidade para entregar',
    ],
    price: '2,99% por transação',
    button: 'Saiba mais',
  },
];

export default function CardGroupYellow() {
  return (
    <Card.Group>
      <div className='card-group card-group-yellow'>
        {cards.map((card, index) => (
          <Card.Yellow key={index} {...card} />
        ))}
      </div>
    </Card.Group>
  );
}
