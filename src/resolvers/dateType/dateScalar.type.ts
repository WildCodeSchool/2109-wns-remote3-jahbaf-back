import {
    GraphQLScalarSerializer,
    GraphQLScalarType,
    GraphQLScalarValueParser,
} from 'graphql';
import { InvalidDateFormatException } from 'src/exceptions';

const parseDateValue: GraphQLScalarValueParser<Date> = (value: unknown): Date => {
    const dateStr = value as string;
    if (!Date.parse(dateStr)) {
        throw new InvalidDateFormatException();
    }
    return new Date(dateStr);
};

const serializeDate: GraphQLScalarSerializer<string> = (value: unknown): string => {
    const date = value as Date;
    return date.toISOString();
};

export const dateScalar = new GraphQLScalarType({
    name: 'Date',
    parseValue: parseDateValue,
    serialize: serializeDate,
});
