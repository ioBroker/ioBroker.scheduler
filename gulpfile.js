/*!
 * ioBroker gulpfile
 * Date: 2023-02-22
 */
'use strict';

const gulp = require('gulp');
const { copyFileSync, readFileSync, statSync, writeFileSync, existsSync } = require('node:fs');
const adapterName = require('./package.json').name.replace('iobroker.', '');
const {
    npmInstall,
    buildReact,
    deleteFoldersRecursive,
    patchHtmlFile,
    copyFiles,
    tsc,
} = require('@iobroker/build-tools');

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
        `${__dirname}/src-admin/src/components/DayNightSwitcher.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/DayOfWeekPanel.jsx`,
        `${__dirname}/src-admin/src/components/DayOfWeekPanel.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/Interval.jsx`,
        `${__dirname}/src-admin/src/components/Interval.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/Intervals.jsx`,
        `${__dirname}/src-admin/src/components/Intervals.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/components/IntervalsContainer.jsx`,
        `${__dirname}/src-admin/src/components/IntervalsContainer.jsx`,
    );
    sync2files(`${__dirname}/src-widgets/src/data/minmax.json`, `${__dirname}/src-admin/src/data/minmax.json`);

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
    if (existsSync(`${__dirname}/src-admin/node_modules`)) {
        return Promise.resolve();
    }
    return npmInstall(`${__dirname}/src-admin/`);
});

gulp.task('2-npm-dep', gulp.series('clean', '2-npm'));

gulp.task('3-build', () => buildReact(`${__dirname}/src-admin`, { vite: true }));

gulp.task('3-build-dep', gulp.series('2-npm-dep', '3-build'));

gulp.task('5-copy', () =>
    gulp
        .src([
            'src-admin/build/*/**',
            'src-admin/build/*',
            // replace it later with
            // ...gulpHelper.ignoreSvgFiles(`${__dirname}/src-admin/`),
            `!src-admin/build/index.html`,
            `!src-admin/build/static/media/Alarm Systems.*.svg`,
            `!src-admin/build/static/media/Amplifier.*.svg`,
            `!src-admin/build/static/media/Anteroom.*.svg`,
            `!src-admin/build/static/media/Attic.*.svg`,
            `!src-admin/build/static/media/Awnings.*.svg`,
            `!src-admin/build/static/media/Balcony.*.svg`,
            `!src-admin/build/static/media/Barn.*.svg`,
            `!src-admin/build/static/media/Basement.*.svg`,
            `!src-admin/build/static/media/Bathroom.*.svg`,
            `!src-admin/build/static/media/Battery Status.*.svg`,
            `!src-admin/build/static/media/Bedroom.*.svg`,
            `!src-admin/build/static/media/Boiler Room.*.svg`,
            `!src-admin/build/static/media/Carport.*.svg`,
            `!src-admin/build/static/media/Ceiling Spotlights.*.svg`,
            `!src-admin/build/static/media/Cellar.*.svg`,
            `!src-admin/build/static/media/Chamber.*.svg`,
            `!src-admin/build/static/media/Chandelier.*.svg`,
            `!src-admin/build/static/media/Climate.*.svg`,
            `!src-admin/build/static/media/Coffee Makers.*.svg`,
            `!src-admin/build/static/media/Cold Water.*.svg`,
            `!src-admin/build/static/media/Computer.*.svg`,
            `!src-admin/build/static/media/Consumption.*.svg`,
            `!src-admin/build/static/media/Corridor.*.svg`,
            `!src-admin/build/static/media/Curtains.*.svg`,
            `!src-admin/build/static/media/Dining Area.*.svg`,
            `!src-admin/build/static/media/Dining Room.*.svg`,
            `!src-admin/build/static/media/Dining.*.svg`,
            `!src-admin/build/static/media/Dishwashers.*.svg`,
            `!src-admin/build/static/media/Doors.*.svg`,
            `!src-admin/build/static/media/Doorstep.*.svg`,
            `!src-admin/build/static/media/Dressing Room.*.svg`,
            `!src-admin/build/static/media/Driveway.*.svg`,
            `!src-admin/build/static/media/Dryer.*.svg`,
            `!src-admin/build/static/media/Entrance.*.svg`,
            `!src-admin/build/static/media/Equipment Room.*.svg`,
            `!src-admin/build/static/media/Fan.*.svg`,
            `!src-admin/build/static/media/Floor Lamps.*.svg`,
            `!src-admin/build/static/media/Front Yard.*.svg`,
            `!src-admin/build/static/media/Gallery.*.svg`,
            `!src-admin/build/static/media/Garage Doors.*.svg`,
            `!src-admin/build/static/media/Garage.*.svg`,
            `!src-admin/build/static/media/Garden.*.svg`,
            `!src-admin/build/static/media/Gates.*.svg`,
            `!src-admin/build/static/media/Ground Floor.*.svg`,
            `!src-admin/build/static/media/Guest Bathroom.*.svg`,
            `!src-admin/build/static/media/Guest Room.*.svg`,
            `!src-admin/build/static/media/Gym.*.svg`,
            `!src-admin/build/static/media/Hairdryer.*.svg`,
            `!src-admin/build/static/media/Hall.*.svg`,
            `!src-admin/build/static/media/Handle.*.svg`,
            `!src-admin/build/static/media/Hanging Lamps.*.svg`,
            `!src-admin/build/static/media/Heater.*.svg`,
            `!src-admin/build/static/media/Home Theater.*.svg`,
            `!src-admin/build/static/media/Hoods.*.svg`,
            `!src-admin/build/static/media/Hot Water.*.svg`,
            `!src-admin/build/static/media/Humidity.*.svg`,
            `!src-admin/build/static/media/Iron.*.svg`,
            `!src-admin/build/static/media/Irrigation.*.svg`,
            `!src-admin/build/static/media/Kitchen.*.svg`,
            `!src-admin/build/static/media/Laundry Room.*.svg`,
            `!src-admin/build/static/media/Led Strip.*.svg`,
            `!src-admin/build/static/media/Light.*.svg`,
            `!src-admin/build/static/media/Lightings.*.svg`,
            `!src-admin/build/static/media/Living Area.*.svg`,
            `!src-admin/build/static/media/Living Room.*.svg`,
            `!src-admin/build/static/media/Lock.*.svg`,
            `!src-admin/build/static/media/Locker Room.*.svg`,
            `!src-admin/build/static/media/Louvre.*.svg`,
            `!src-admin/build/static/media/Mowing Machine.*.svg`,
            `!src-admin/build/static/media/Music.*.svg`,
            `!src-admin/build/static/media/names.*.txt`,
            `!src-admin/build/static/media/Nursery.*.svg`,
            `!src-admin/build/static/media/Office.*.svg`,
            `!src-admin/build/static/media/Outdoor Blinds.*.svg`,
            `!src-admin/build/static/media/Outdoors.*.svg`,
            `!src-admin/build/static/media/People.*.svg`,
            `!src-admin/build/static/media/Playroom.*.svg`,
            `!src-admin/build/static/media/Pool.*.svg`,
            `!src-admin/build/static/media/Power Consumption.*.svg`,
            `!src-admin/build/static/media/Printer.*.svg`,
            `!src-admin/build/static/media/Pump.*.svg`,
            `!src-admin/build/static/media/Rear Wall.*.svg`,
            `!src-admin/build/static/media/Receiver.*.svg`,
            `!src-admin/build/static/media/Sconces.*.svg`,
            `!src-admin/build/static/media/Second Floor.*.svg`,
            `!src-admin/build/static/media/Security.*.svg`,
            `!src-admin/build/static/media/Shading.*.svg`,
            `!src-admin/build/static/media/Shed.*.svg`,
            `!src-admin/build/static/media/Shutters.*.svg`,
            `!src-admin/build/static/media/Sleeping Area.*.svg`,
            `!src-admin/build/static/media/SmokeDetector.*.svg`,
            `!src-admin/build/static/media/Sockets.*.svg`,
            `!src-admin/build/static/media/Speaker.*.svg`,
            `!src-admin/build/static/media/Stairway.*.svg`,
            `!src-admin/build/static/media/Stairwell.*.svg`,
            `!src-admin/build/static/media/Storeroom.*.svg`,
            `!src-admin/build/static/media/Stove.*.svg`,
            `!src-admin/build/static/media/Summer House.*.svg`,
            `!src-admin/build/static/media/Swimming Pool.*.svg`,
            `!src-admin/build/static/media/Table Lamps.*.svg`,
            `!src-admin/build/static/media/Temperature Sensors.*.svg`,
            `!src-admin/build/static/media/Terrace.*.svg`,
            `!src-admin/build/static/media/Toilet.*.svg`,
            `!src-admin/build/static/media/Tv.*.svg`,
            `!src-admin/build/static/media/Upstairs.*.svg`,
            `!src-admin/build/static/media/Vacuum Cleaner.*.svg`,
            `!src-admin/build/static/media/Ventilation.*.svg`,
            `!src-admin/build/static/media/Wardrobe.*.svg`,
            `!src-admin/build/static/media/Washing Machines.*.svg`,
            `!src-admin/build/static/media/Washroom.*.svg`,
            `!src-admin/build/static/media/Water Consumption.*.svg`,
            `!src-admin/build/static/media/Water Heater.*.svg`,
            `!src-admin/build/static/media/Water.*.svg`,
            `!src-admin/build/static/media/Wc.*.svg`,
            `!src-admin/build/static/media/Weather.*.svg`,
            `!src-admin/build/static/media/Window.*.svg`,
            `!src-admin/build/static/media/Windscreen.*.svg`,
            `!src-admin/build/static/media/Workshop.*.svg`,
            `!src-admin/build/static/media/Workspace.*.svg`,
        ])
        .pipe(gulp.dest('admin/')),
);

gulp.task('5-copy-dep', gulp.series('3-build-dep', '5-copy'));

gulp.task('6-patch', () =>
    patchHtmlFile(`${__dirname}/src-admin/build/index.html`).then(() =>
        copyFileSync(`${__dirname}/src-admin/build/index.html`, `${__dirname}/admin/index_m.html`),
    ),
);

gulp.task('6-patch-dep', gulp.series('5-copy-dep', '6-patch'));

// Backend (adapter) TypeScript sources: src/*.ts => build/*.js
gulp.task('backend-0-clean', done => {
    deleteFoldersRecursive(`${__dirname}/build`);
    done();
});

gulp.task('backend-1-compile', async () => tsc(__dirname));

gulp.task('backend-build', gulp.series(['backend-0-clean', 'backend-1-compile']));

gulp.task('default', gulp.series('6-patch-dep', 'widget-build', 'backend-build'));
