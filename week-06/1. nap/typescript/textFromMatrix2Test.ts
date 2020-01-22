import * as test from 'tape';
import { getText } from './textFromMatrix2';

test('text from matrix', t => {

  const matrix2 = [
		["h", "p", "e"],
		["k", "l", "a"],
		["l", "m", "o"]
	]
  let output = [ 'h', 'e', 'l', 'l', 'o' ]; //ehhez deepequal kell a teszthez
  let output2 = 'hello';


  t.equal(getText(matrix2), output2);
  t.end();
});

// test('no matrix provided', t => {
//   t.equal(getText(undefined), '');
//   t.end();
// });