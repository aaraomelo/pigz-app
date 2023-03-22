import CardGroup from './CardGroup';
import CardRed from './CardRed';
import CardYellow from './CardYellow';
import './Card.css';
import CardOrange from './CardOrange';

export default Object.assign({},
    {
        Red: CardRed,
        Yellow: CardYellow,
        Orange: CardOrange,
        Group: CardGroup,
    }
);
