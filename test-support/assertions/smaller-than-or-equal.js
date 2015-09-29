import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export default function smallerThanOrEqual(context, arg1, arg2, message = "") {

  const result       = arg1 <= arg2;
  const finalMessage = assertionMessage('Expected arg1 to be smaller or equal.', message);

  this.push(result, arg1, arg2, finalMessage);

}
