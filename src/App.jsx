import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectProduct, setSelectProduct] = useState('Jam');

  const handleSelectGoods = good => {
    setSelectProduct(good === selectProduct ? null : good);
  };

  const GoodsList = ({ goodsList }) =>
    goodsList.map(good => {
      const isSelected = good === selectProduct; // Створено змінну для порівняння

      return (
        <tr
          data-cy="Good"
          className={classNames({
            'has-background-success-light': isSelected,
          })}
        >
          <td>
            <button
              data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
              type="button"
              className={classNames('button', { 'is-info': isSelected })}
              onClick={() => handleSelectGoods(good)}
            >
              {isSelected ? '-' : '+'}
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      );
    });

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectProduct ? (
          <>
            {selectProduct} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectProduct(null)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          <GoodsList goodsList={goods} />
        </tbody>
      </table>
    </main>
  );
};
