import Case from "case";
import pluralize from "pluralize";
const snakeOne = (name) => Case.snake(name);
const snakeMany = (name) => pluralize(Case.snake(name));
const pascalOne = (name) => Case.pascal(name);
export {
  snakeOne as a,
  pascalOne as p,
  snakeMany as s
};
