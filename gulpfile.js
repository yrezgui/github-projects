var gulp = require('gulp');

gulp.task('index-build', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['index-page'], function() {
  console.log('BUILD finished');
});
