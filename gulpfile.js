const gulp = require('gulp');

gulp.task('copy-to-dist', () => {
    gulp.src(['./src/**/*','!./src/**/*.ts', '!./src/**/components/**/*'])
        .pipe(gulp.dest('./dist/'));
});
