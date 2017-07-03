const gulp = require('gulp');
const gulpTs = require('gulp-typescript');
const gulpRiot = require('gulp-riot');
const gulpConcat = require('gulp-concat');

const tsProj = gulpTs.createProject('./tsconfig.json');
gulp.task('backend', () => {
	gulp.src('./back/*.ts')
		.pipe(tsProj())
		.js
		.pipe(gulp.dest('./dist'));
});
gulp.task('frontend', () => {
	gulp.src('./front/tags/*.tag')
	.pipe(gulpRiot({
		type: 'typescript'
	}))
	.pipe(gulpConcat('tags.js'))
	.pipe(gulp.dest('./front/'));
});
gulp.task('default', ['backend', 'frontend'], () => {
	gulp.watch(['./back/*.ts'], ['backend']);
	gulp.watch(['./front/tags/*.tag'], ['frontend']);
});