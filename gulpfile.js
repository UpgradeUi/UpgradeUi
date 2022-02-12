const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/sass/upgrade.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist"));
}

function watchTask() {
  watch(["src/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
