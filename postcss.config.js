import packageConfig from './package.json' with { type: 'json' };
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default () => ({
    plugins: [
        // Explicitly specify browserslist to override ones from node_modules
        // For example, Swiper has it in its package.json
        postcssPresetEnv({ browsers: packageConfig.browserslist }),
        autoprefixer({ overrideBrowserslist: packageConfig.browserslist }),
        cssnano()
    ]
});
