/**
 * The answer of the message `help`: what the instance answers, written for AI agents (e.g. ioBroker.pi-agent,
 * or the MCP server with `send_to`) and script authors. Keep it in sync with `onMessage` in main.ts and the README.
 */

/** Every command `onMessage` answers; `write` = the command changes something */
export const COMMANDS: { command: string; write: boolean }[] = [
    { command: 'help', write: false },
    { command: 'setProfile', write: true },
];

export const HELP = `ioBroker.scheduler: week schedules ("profiles") that write a value into states at fixed times of the day, e.g.
the target temperature of the heating or the position of the blinds. An agent can read the profiles and change the
values of the day, the days of the week and the holiday flag of a profile, and switch profiles on and off.

Profiles: native.profiles of the instance object system.adapter.scheduler.0 (read the object), a tree of
{id, title, parent (id of the folder, "" = top level), type: "profile" or "folder", data}. data of a profile:
- members: the IDs of the states it writes.
- type: temperature (the value, e.g. 21), percent (0-100, scaled to min..max of the state if it has both),
  onoff (0 = false, else true) or custom (the value; with a value list data.values [{label, value?, id?}] the
  index of the entry, 0 = the first: the adapter writes its value or the current value of the state id).
- intervalDuration: hours of one interval (0.25, 0.5, 1, 2, 3 or 4); intervals: one value per interval,
  24 / intervalDuration of them; intervals[0] starts at 0:00 local time of the ioBroker host.
- dow: the days it runs (0 = Sunday, 1 = Monday ... 6 = Saturday); holiday: true = also on holidays (while the
  state native.holidayId of the instance is true).
- prio: 0 normal, 1 high, 2 highest: if running profiles write the same state, the higher one wins.
- state: the switch of the profile: true = the state scheduler.0.<folders>.<title> (see States), or the ID of
  another state. The profile runs only while its switch is true.
At the start of every interval the adapter writes the value of each running profile into its members.

Commands (sendTo scheduler.0):
- setProfile {id, intervals?, dow?, holiday?}: changes one profile; id = its id in native.profiles (not a state ID).
  intervals: numbers, exactly as many as the profile has; dow: days 0-6; holiday: boolean. Left out = unchanged.
  Writes the instance object with the rights of the user of the message; the instance restarts and writes the
  values of the current interval: {result: true} or {error}, e.g. "Profile <id> not found", "Invalid intervals
  for profile <title>", "Invalid days of the week for profile <title>".

States (scheduler.0.*), the path of folders and title of the profile (dots and forbidden characters become _),
e.g. scheduler.0.Heating.Living room:
- <path>: the switch (if data.state is true): true = the profile is on, false = off; a change counts from the start
  of the next interval of the profile.
- <path>_active: true while the profile runs today (enabled and the day matches); read-only.

How to talk to the user:
- Name profiles by title (and folder), times in local time ("6:00-8:00: 21 °C"), days by their names.
- Read the profile before a change and change only what the user asked for: send all intervals, with the new values
  only in the asked hours.
- setProfile and the switch of a profile change the heating, blinds or watering: only on the user's request; if
  several profiles fit, ask which one.`;
