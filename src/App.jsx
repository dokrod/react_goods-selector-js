import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

  const GoodsList = ({ goodsList }) =>
    goodsList.map(good => (
      <tr
        data-cy="Good"
        className={good === selectProduct ? 'has-background-success-light' : ''}
      >
        <td>
          <button
            data-cy={good === selectProduct ? 'RemoveButton' : 'AddButton'}
            type="button"
            className={`button ${good === selectProduct ? 'is-info' : ''}`}
            onClick={() => {
              setSelectProduct(good === selectProduct ? null : good);
            }}
          >
            {good === selectProduct ? '-' : '+'}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    ));

  return (
    <main className="section container">
      {selectProduct ? (
        <h1 className="title is-flex is-align-items-center">
          {selectProduct} is selected
          {selectProduct && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectProduct(null)}
            />
          )}
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          <GoodsList goodsList={goods} />
        </tbody>
      </table>
    </main>
  );
};
