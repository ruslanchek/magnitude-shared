import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: ['./src/index.ts'],
    output: [
      {
        file: './build/index.js',
        format: 'cjs',
      },
      {
        file: './build/index.es.js',
        format: 'es',
      },
    ],
    external: [],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: ['./src/**/*.ts'],
        },
      }),
      terser(),
    ],
  },
];
