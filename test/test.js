import { plusNum, ArrayPlusNum } from '../src/test'
import test from 'ava';

test('main', t => {
  t.is(ArrayPlusNum([1, 2]), 3);
});

test('main', t => {
  t.is(plusNum([1, 2], 4, 5, [2, 4]), 18);
});
