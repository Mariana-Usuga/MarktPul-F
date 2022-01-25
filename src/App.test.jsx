import cartReducer from './store/reducers/cartReducer';

test('Return initial state', () => {
  expect(cartReducer(undefined, {})).toEqual({
    cart: [],
  });
});
