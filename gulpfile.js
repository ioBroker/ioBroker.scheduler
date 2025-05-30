/*!
 * ioBroker gulpfile
 * Date: 2023-02-22
 */
'use strict';

const gulp = require('gulp');
const { copyFileSync, readFileSync, statSync, writeFileSync, existsSync, readdirSync, rmdirSync } = require('node:fs');
const adapterName = require('./package.json').name.replace('iobroker.', '');
const { npmInstall, buildReact, deleteFoldersRecursive, patchHtmlFile, copyFiles } = require('@iobroker/build-tools');

function sync2files(src, dst) {
    const srcTxt = readFileSync(src).toString('utf8');
    const destTxt = readFileSync(dst).toString('utf8');
    if (srcTxt !== destTxt) {
        const srcs = statSync(src);
        const dest = statSync(dst);
        if (srcs.mtime > dest.mtime) {
            writeFileSync(dst, srcTxt);
        } else {
            writeFileSync(src, destTxt);
        }
    }
}

function buildWidgets() {
    // sync src and src-widgets
    sync2files(
        `${__dirname}/src-widgets/src/components/DayNightSwitcher.jsx`,
        `${__dirname}/src/src/components/DayNightSwitcher.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/DayOfWeekPanel.jsx`,
        `${__dirname}/src/src/components/DayOfWeekPanel.jsx`,
    );
    sync2files(`${__dirname}/src-widgets/src/components/Interval.jsx`, `${__dirname}/src/src/components/Interval.jsx`);
    sync2files(
        `${__dirname}/src-widgets/src/components/Intervals.jsx`,
        `${__dirname}/src/src/components/Intervals.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/IntervalsContainer.jsx`,
        `${__dirname}/src/src/components/IntervalsContainer.jsx`,
    );
    sync2files(`${__dirname}/src-widgets/src/data/minmax.json`, `${__dirname}/src/src/data/minmax.json`);

    return buildReact(`${__dirname}/src-widgets/`, { rootDir: __dirname, vite: true });
}

// TASKS
gulp.task('widget-0-clean', done => {
    deleteFoldersRecursive(`${__dirname}/src-widgets/build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
    done();
});

gulp.task('widget-1-npm', async () => npmInstall(`${__dirname}/src-widgets/`));

gulp.task('widget-2-compile', async () => buildWidgets());

gulp.task('widget-3-copy', done => {
    copyFiles([`src-widgets/build/assets/**/*`], `widgets/${adapterName}/assets`);
    copyFiles([`src-widgets/build/img/**/*`], `widgets/${adapterName}/img`);
    copyFiles([`src-widgets/build/customWidgets.js`], `widgets/${adapterName}`);
    done();
});

gulp.task('widget-build', gulp.series(['widget-0-clean', 'widget-1-npm', 'widget-2-compile', 'widget-3-copy']));

gulp.task('clean', done => {
    deleteFoldersRecursive(`${__dirname}/admin`, ['scheduler.png']);
    done();
});

gulp.task('2-npm', () => {
    if (existsSync(`${__dirname}/src/node_modules`)) {
        return Promise.resolve();
    }
    return npmInstall(`${__dirname}/src/`);
});

gulp.task('2-npm-dep', gulp.series('clean', '2-npm'));

gulp.task('3-build', () => buildReact(`${__dirname}/src`, { vite: true }));

gulp.task('3-build-dep', gulp.series('2-npm-dep', '3-build'));

gulp.task('5-copy', () =>
    gulp
        .src([
            'src/build/*/**',
            'src/build/*',
            // replace it later with
            // ...gulpHelper.ignoreSvgFiles(`${__dirname}/src/`),
            `!src/build/index.html`,
            `!src/build/static/media/Alarm Systems.*.svg`,
            `!src/build/static/media/Amplifier.*.svg`,
            `!src/build/static/media/Anteroom.*.svg`,
            `!src/build/static/media/Attic.*.svg`,
            `!src/build/static/media/Awnings.*.svg`,
            `!src/build/static/media/Balcony.*.svg`,
            `!src/build/static/media/Barn.*.svg`,
            `!src/build/static/media/Basement.*.svg`,
            `!src/build/static/media/Bathroom.*.svg`,
            `!src/build/static/media/Battery Status.*.svg`,
            `!src/build/static/media/Bedroom.*.svg`,
            `!src/build/static/media/Boiler Room.*.svg`,
            `!src/build/static/media/Carport.*.svg`,
            `!src/build/static/media/Ceiling Spotlights.*.svg`,
            `!src/build/static/media/Cellar.*.svg`,
            `!src/build/static/media/Chamber.*.svg`,
            `!src/build/static/media/Chandelier.*.svg`,
            `!src/build/static/media/Climate.*.svg`,
            `!src/build/static/media/Coffee Makers.*.svg`,
            `!src/build/static/media/Cold Water.*.svg`,
            `!src/build/static/media/Computer.*.svg`,
            `!src/build/static/media/Consumption.*.svg`,
            `!src/build/static/media/Corridor.*.svg`,
            `!src/build/static/media/Curtains.*.svg`,
            `!src/build/static/media/Dining Area.*.svg`,
            `!src/build/static/media/Dining Room.*.svg`,
            `!src/build/static/media/Dining.*.svg`,
            `!src/build/static/media/Dishwashers.*.svg`,
            `!src/build/static/media/Doors.*.svg`,
            `!src/build/static/media/Doorstep.*.svg`,
            `!src/build/static/media/Dressing Room.*.svg`,
            `!src/build/static/media/Driveway.*.svg`,
            `!src/build/static/media/Dryer.*.svg`,
            `!src/build/static/media/Entrance.*.svg`,
            `!src/build/static/media/Equipment Room.*.svg`,
            `!src/build/static/media/Fan.*.svg`,
            `!src/build/static/media/Floor Lamps.*.svg`,
            `!src/build/static/media/Front Yard.*.svg`,
            `!src/build/static/media/Gallery.*.svg`,
            `!src/build/static/media/Garage Doors.*.svg`,
            `!src/build/static/media/Garage.*.svg`,
            `!src/build/static/media/Garden.*.svg`,
            `!src/build/static/media/Gates.*.svg`,
            `!src/build/static/media/Ground Floor.*.svg`,
            `!src/build/static/media/Guest Bathroom.*.svg`,
            `!src/build/static/media/Guest Room.*.svg`,
            `!src/build/static/media/Gym.*.svg`,
            `!src/build/static/media/Hairdryer.*.svg`,
            `!src/build/static/media/Hall.*.svg`,
            `!src/build/static/media/Handle.*.svg`,
            `!src/build/static/media/Hanging Lamps.*.svg`,
            `!src/build/static/media/Heater.*.svg`,
            `!src/build/static/media/Home Theater.*.svg`,
            `!src/build/static/media/Hoods.*.svg`,
            `!src/build/static/media/Hot Water.*.svg`,
            `!src/build/static/media/Humidity.*.svg`,
            `!src/build/static/media/Iron.*.svg`,
            `!src/build/static/media/Irrigation.*.svg`,
            `!src/build/static/media/Kitchen.*.svg`,
            `!src/build/static/media/Laundry Room.*.svg`,
            `!src/build/static/media/Led Strip.*.svg`,
            `!src/build/static/media/Light.*.svg`,
            `!src/build/static/media/Lightings.*.svg`,
            `!src/build/static/media/Living Area.*.svg`,
            `!src/build/static/media/Living Room.*.svg`,
            `!src/build/static/media/Lock.*.svg`,
            `!src/build/static/media/Locker Room.*.svg`,
            `!src/build/static/media/Louvre.*.svg`,
            `!src/build/static/media/Mowing Machine.*.svg`,
            `!src/build/static/media/Music.*.svg`,
            `!src/build/static/media/names.*.txt`,
            `!src/build/static/media/Nursery.*.svg`,
            `!src/build/static/media/Office.*.svg`,
            `!src/build/static/media/Outdoor Blinds.*.svg`,
            `!src/build/static/media/Outdoors.*.svg`,
            `!src/build/static/media/People.*.svg`,
            `!src/build/static/media/Playroom.*.svg`,
            `!src/build/static/media/Pool.*.svg`,
            `!src/build/static/media/Power Consumption.*.svg`,
            `!src/build/static/media/Printer.*.svg`,
            `!src/build/static/media/Pump.*.svg`,
            `!src/build/static/media/Rear Wall.*.svg`,
            `!src/build/static/media/Receiver.*.svg`,
            `!src/build/static/media/Sconces.*.svg`,
            `!src/build/static/media/Second Floor.*.svg`,
            `!src/build/static/media/Security.*.svg`,
            `!src/build/static/media/Shading.*.svg`,
            `!src/build/static/media/Shed.*.svg`,
            `!src/build/static/media/Shutters.*.svg`,
            `!src/build/static/media/Sleeping Area.*.svg`,
            `!src/build/static/media/SmokeDetector.*.svg`,
            `!src/build/static/media/Sockets.*.svg`,
            `!src/build/static/media/Speaker.*.svg`,
            `!src/build/static/media/Stairway.*.svg`,
            `!src/build/static/media/Stairwell.*.svg`,
            `!src/build/static/media/Storeroom.*.svg`,
            `!src/build/static/media/Stove.*.svg`,
            `!src/build/static/media/Summer House.*.svg`,
            `!src/build/static/media/Swimming Pool.*.svg`,
            `!src/build/static/media/Table Lamps.*.svg`,
            `!src/build/static/media/Temperature Sensors.*.svg`,
            `!src/build/static/media/Terrace.*.svg`,
            `!src/build/static/media/Toilet.*.svg`,
            `!src/build/static/media/Tv.*.svg`,
            `!src/build/static/media/Upstairs.*.svg`,
            `!src/build/static/media/Vacuum Cleaner.*.svg`,
            `!src/build/static/media/Ventilation.*.svg`,
            `!src/build/static/media/Wardrobe.*.svg`,
            `!src/build/static/media/Washing Machines.*.svg`,
            `!src/build/static/media/Washroom.*.svg`,
            `!src/build/static/media/Water Consumption.*.svg`,
            `!src/build/static/media/Water Heater.*.svg`,
            `!src/build/static/media/Water.*.svg`,
            `!src/build/static/media/Wc.*.svg`,
            `!src/build/static/media/Weather.*.svg`,
            `!src/build/static/media/Window.*.svg`,
            `!src/build/static/media/Windscreen.*.svg`,
            `!src/build/static/media/Workshop.*.svg`,
            `!src/build/static/media/Workspace.*.svg`,
        ])
        .pipe(gulp.dest('admin/')),
);

gulp.task('5-copy-dep', gulp.series('3-build-dep', '5-copy'));

gulp.task('6-patch', () =>
    patchHtmlFile(`${__dirname}/src/build/index.html`).then(() =>
        copyFileSync(`${__dirname}/src/build/index.html`, `${__dirname}/admin/index_m.html`),
    ),
);

gulp.task('6-patch-dep', gulp.series('5-copy-dep', '6-patch'));

gulp.task('default', gulp.series('6-patch-dep', 'widget-build'));
