import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {rules: {
    // Obliga a usar 'const' cuando una variable no es reasignada
    'prefer-const':'warn',
    // Prohibe el uso de var
    'no-var':'error',
    camelcase:['error',{properties:'always', ignoreDestructuring:false}]
  }}
];

const persona = {primerNombre: 'Juan', apellido:'Lopez'};

const {primerNombre, apellido} = persona;