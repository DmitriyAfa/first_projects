// описываем модули которые скачали
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // берем из модуля gulp-sass методом require
const browserSync = require('browser-sync');

function style() {
    // находим scss file -> делаем его конвертацию -> сконвертированный scss файл положим в какую нибудь дерикторию 
    return gulp.src('./css/**/*.scss')//** === во всех вложенных папках, *.scss === все файлы с расширением scss -> сделай следующее 
        //gulp работает с pipe
        .pipe(sass()) // -> сконвертируй sass файл -> 
        .pipe(gulp.dest('./css')) // -> и положи его в 
        .pipe(browserSync, stream()) //отправляем (пушим) стили в браузер
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./css/**/*.scss', style); //следим за изменением состояния файла(ов), в случае изменения выполнить 
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// Заготовка gulpfile для проектов. Копируем и вставляем -> в терминале набираем команду  npm i --save-dev gulp gulp-sass browser-sync   и другие модули для нужных задач 
