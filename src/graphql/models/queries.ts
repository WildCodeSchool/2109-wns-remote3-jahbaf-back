import { QueriesBuilder } from '../helpers';
import * as queryFunctions from 'src/resolvers/Queries';
import { randomTypes } from './base';

const queries = new QueriesBuilder();

/** Hello query */
queries.addResolver(queryFunctions.hello.name, randomTypes.MESSAGE);

export const Query = queries.getQuery();
