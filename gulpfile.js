var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync')



gulp.task('less', function(){ // Создаем таск "sass"
    return gulp.src('app/less/main.scss') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/js/main.js'
        ])
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/**/*.scss', ['less']); // Наблюдение за sass файлами
   	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});
gulp.task('build', ['img', 'less', 'scripts'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css/main.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});