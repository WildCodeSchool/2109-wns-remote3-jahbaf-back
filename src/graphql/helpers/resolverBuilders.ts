import { AllTypes, Parameters } from '../models/base';

/**
 * Utility class containing method to help builders to do their job
 */
export class Resolvers {
    /** Contains the list of resolvers inside a mutation or a query */
    protected resolvers: string[] = [];

    /**
     * Build the resolver string
     * @param name Name of the function representing the resolver
     * @param returnType Type of the value returned by the resolver
     * @param params Optional - List of parameters with types to provide to the resolver function
     * @example buildResolver('connexion', 'User', ['email: String', 'password: String']) => 'connexion(email: String, password: String): User!'
     */
    protected buildResolver = (name: string, returnType: AllTypes, params: string[] = []) => {
        return `${name}${params.length ? '(' + params.join(', ') + ')' : ''}: ${returnType}!`;
    };

    /**
     * Given a name and a type return a string in a key:value pattern
     * @param name Will represents the key
     * @param type Will reprensent the value
     * @example createParameter('email', 'String') => 'email: String'
     */
    private createParameter = (name: string, type: AllTypes) => `${name}: ${type}`;

    /**
     * Add built resolver string to the resolver array
     * @param name Name of the function representing the resolver
     * @param returnType Type of the value returned by the resolver
     * @param params Optional - List of parameters with types to provide to the resolver function
     */
    public addResolver(name: string, returnType: AllTypes, params?: Parameters) {
        const parameters: string[] = [];
        for(const key in params){
            parameters.push(this.createParameter(key, params[key]));
        }
        this.resolvers.push(this.buildResolver(name, returnType, parameters));
        return this;
    }
}

/**
 * Build a Mutation type string
 */
export class MutationsBuilder extends Resolvers {
    constructor() { super(); }

    /**
     * Return the fully built Mutation resolvers string
     */
    getMutation() {
        return `
            type Mutation {
                ${this.resolvers.join()}
            }
        `;
    }
}

/**
 * Build a Query type string
 */
export class QueriesBuilder extends Resolvers {
    constructor() { super(); }

    /**
     * Return the fully built Query resolvers string
     */
    getQuery() {
        return `
            type Query {
                ${this.resolvers.join()}
            }
        `;
    }
}

/**
 * Build generic Types string
 */
export class TypesBuilder {
    /** Contains the differents subTypes on a main Type */
    private types: string[] = [];

    constructor(private type: AllTypes) {}

    /**
     * Add all the subTypes to the main Type array
     * @param types List of subTypes to add to main Type
     * @returns 
     */
    public addTypes(types: Parameters) {
        for(const key in types){
            this.types.push(this.buildType(key, types[key]));
        }
        return this;
    }

    /**
     * Given a name and a type return a string in a key:value pattern
     * @param name Will represents the key
     * @param type Will reprensent the value
     * @example buildType('email', 'String') => 'email: String'
     */
    private buildType = (name: string, type: AllTypes) => {
        return `${name}: ${type}`;
    };

    /**
     * Return the fully built Types string
     */
    getType() {
        return `
            type ${this.type} {
                ${this.types.join()}
            }
        `;
    }
}
