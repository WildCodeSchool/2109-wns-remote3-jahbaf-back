/**
 * Message type definition
 */
const Message = `
  type Message {
    message: String
  }
`;

/**
* Void scalar definition
*/
export const Void = `
scalar Void
`;

export const UtilsTypes: string[] = [Message, Void];