import react from 'react';
import Button from '../button/button';
import './listItem.css';
import itemLogo from "c:/Users/1/Desktop/LearnReact/taskreact/src/assets/img/item.jpg";

// when i wrote import ItemLogo from '../src/assets/img/react1.png'; it didn't work
 function Item () {
 return  (
<div className="listItem">
 <div className="imgItem">
 <img src={itemLogo} id='itemImg' />
 </div>
 <p className="itemTitle">Harry Potter</p>
 <h6 id="descId">Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</h6>
 <Button />
</div>

 )

}
export default Item;