import type { Block, Tree } from 'types'

/**
 * Represents the state of the parser.
 */
export type ParserState = {
  /**
   * Temporary buffer for the current state.
   */
  buffer: string;

  /**
   * Used to keep track of the current position in the input string.
   */
  position: number;

  /**
   * The current line number, used for error reporting.
   */
  line: number;

  /**
   * The current column number, used for error reporting.
   */
  column: number;

  /**
   * The key of the property currently being parsed.
   */
  property: string;

  /**
   * Tracks whether a device range block is currently being parsed.
   */
  isDeviceRange: boolean;

  /**
   * Tracks whether a property value is currently being parsed.
   */
  isDeclaration: boolean;

  /**
   * Tracks whether a selector is currently being parsed.
   * 
   * Used to not treat the assignment operator as property value assignment in selectors.
   */
  isSelector: boolean;

  /**
   * The stack of nested blocks being parsed.
   */
  stack: Array<Block>;

  /**
   * The root of the parsed tree.
   */
  tree: Tree;
}