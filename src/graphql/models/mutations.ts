import { MutationsBuilder } from '../helpers';
import * as mutationFunctions from 'src/resolvers/Mutations';
import { authTypes, baseGraphQLTypes, Parameters } from './base';

const mutations = new MutationsBuilder();

/** Sign up mutation */
const signupParams: Parameters = {
    email: baseGraphQLTypes.STRING,
    password: baseGraphQLTypes.STRING,
    name: baseGraphQLTypes.STRING
};
mutations.addResolver(mutationFunctions.signUp.name, authTypes.AUTH_PAYLOAD, signupParams);

export const Mutation = mutations.getMutation();
