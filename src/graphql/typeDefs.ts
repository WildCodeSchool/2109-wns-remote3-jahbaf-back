import Models from './models';
import Utils from './utils';

/** 
 * Models: Représentation de notre data en DB
 * Utils: Custom types + resolvers
 */
export const typeDefs = [
  ...Models , ...Utils
];
