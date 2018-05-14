import test from 'ava';
import venikman from '.';

test('venikman()', t => {
	t.notThrows(venikman, 'Fix all module errors.');
});
