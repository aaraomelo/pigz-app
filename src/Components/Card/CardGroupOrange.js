import React from "react";
import Card from ".";
import Carousel from "../Carousel";

const cards = [
  {
    title: 'Pigz Marketplace',
    body: 'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.',
    image: 'pigz_marketplace.png',
  },
  {
    title: 'Pigz Gestão',
    body: 'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.',
    image: 'pigz_gestao.png',
  },
  {
    title: 'Gestão de entregadores',
    body: 'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.',
    image: 'gestao_entregadores.png',
  },
  {
    title: 'Pagamento online',
    body: 'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.',
    image: 'pagamento_online.png',
  }
];

export default function CardGroupOrange() {
  return (
    <Card.Group className='card-group-orange'>
      <Carousel>
        {cards.map((card, index) => (
          <Card.Orange key={index} {...card} />
        ))}
      </Carousel>
    </Card.Group>
  );
}
