
const srcDirPath = './src';
const destDirPath = './dest';

export default {
    srcDirPath,
    destDirPath,

    copy: {
        src: [`${srcDirPath}/**/*.*`, `!${srcDirPath}/scss/**/*.*`, `!${srcDirPath}/js/**/*.*`],
        dest: destDirPath,
    },

    scss: {
        src: `${srcDirPath}/scss/*.scss`,
        dest: `${destDirPath}/css`,
        watch: `${srcDirPath}/scss/**/*.scss`,
    },

    js: {
        src: `${srcDirPath}/js/*.js`,
        dest: `${destDirPath}/js`,
        watch: `${srcDirPath}/js/**/*.js`,
    }

    
}