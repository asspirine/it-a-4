const fse = require('fs-extra');


// fse.ensureFileSync('./first_dir/file.txt');
//     console.log('New empty dir and file created');
fse.ensureDirSync('./first_dir');
    console.log('New empty dir created');
fse.ensureFileSync('./first_dir/file.txt');
    console.log('New file created');


fse.ensureDirSync('./second_dir');
    console.log('Second dir created');


fse.moveSync('./first_dir/file.txt','./second_dir/file.txt',{ overwrite: true });
    console.log('File mooved to second dir');


// fse.copySync('./second_dir','./third_dir');
//     console.log('third_dir cteated and file.txt copied to third_dir');
fse.ensureDirSync('./third_dir');
    console.log('Third dir created');
fse.copyFileSync('./second_dir/file.txt','./third_dir/file.txt');
    console.log('File copied to third dir');


fse.removeSync('./second_dir/file.txt');
fse.removeSync('./third_dir/file.txt');
fse.removeSync('./first_dir');
fse.removeSync('./second_dir');
fse.removeSync('./third_dir');
    console.log('All files and folders removed');