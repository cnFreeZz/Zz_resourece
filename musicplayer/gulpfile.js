var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('html',function(){
    gulp.src('./src/index.html')
      .pipe(connect.reload())
      .pipe(gulp.dest('./dist'));
});

//转移css文件并预编译less
gulp.task('css',function(){
    gulp.src('./src/css/*.less')
    .pipe(less())
    .pipe(connect.reload())
    .pipe(gulp.dest('./dist/css'))
});

// 监听文件变化
gulp.task('watch',function(){
    gulp.watch('./src/index.html',['html']);
    gulp.watch('./src/css/*.less',['css']);  
    gulp.watch('./src/js/*.js',['js']);
});

// 启动服务器
gulp.task('server',function(){
     connect.server({      
       port:8080,
       livereload:true
     });
});

//转移js
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(connect.reload())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default',['html','watch','server','css','js']);