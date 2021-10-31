import { TypesBuilder } from '../../helpers';
import { baseGraphQLTypes, randomTypes } from '../base';

/**
 * Message type definition
 */
const message = new TypesBuilder(randomTypes.MESSAGE);
const Message = message.addTypes({
    message: baseGraphQLTypes.STRING,
}).getType();

export const RandomTypes: string[] = [Message];
