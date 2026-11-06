/**
 * The manifest of `<iob-scheduler-profile>`. Read by the build only (`vite.config.ts`), which writes it as
 * `scheduler-profile.json` next to the module - a host reads that file for its palette and its settings without
 * loading the module.
 *
 * The name is the label of the vis-2 widget (`scheduler` in `src-widgets/src/i18n`), so that vis-2 shows its native
 * widget instead of this component, and every other host - devices, Aura, admin - shows the component.
 */
import type { WebComponentManifest, WebComponentText } from '@iobroker/web-components';

import de from '../../src-widgets/src/i18n/de.json' with { type: 'json' };
import en from '../../src-widgets/src/i18n/en.json' with { type: 'json' };
import es from '../../src-widgets/src/i18n/es.json' with { type: 'json' };
import fr from '../../src-widgets/src/i18n/fr.json' with { type: 'json' };
import it from '../../src-widgets/src/i18n/it.json' with { type: 'json' };
import nl from '../../src-widgets/src/i18n/nl.json' with { type: 'json' };
import pl from '../../src-widgets/src/i18n/pl.json' with { type: 'json' };
import pt from '../../src-widgets/src/i18n/pt.json' with { type: 'json' };
import ru from '../../src-widgets/src/i18n/ru.json' with { type: 'json' };
import uk from '../../src-widgets/src/i18n/uk.json' with { type: 'json' };
import zhCn from '../../src-widgets/src/i18n/zh-cn.json' with { type: 'json' };
// with the extension: `vite.config.ts` imports this file, and Vite may load its config natively
import { MODULE_FILE, TAG } from './constants.ts';

export { MANIFEST_FILE, MODULE_FILE, MODULE_PATH } from './constants.ts';

/** The translations of the vis-2 widget */
const WIDGET_WORDS: Record<ioBroker.Languages, Record<string, string>> = {
    en,
    de,
    ru,
    pt,
    nl,
    fr,
    it,
    es,
    pl,
    uk,
    'zh-cn': zhCn,
};

/**
 * A word of the vis-2 widget in every language
 *
 * @param key the key in `src-widgets/src/i18n/*.json`
 * @param capitalize whether to start with a capital letter: vis-2 compares the names without regard to case
 */
function widgetWord(key: string, capitalize?: boolean): WebComponentText {
    const text: Partial<Record<ioBroker.Languages, string>> = {};
    for (const [lang, words] of Object.entries(WIDGET_WORDS) as [ioBroker.Languages, Record<string, string>][]) {
        const word = words[key];
        if (!word) {
            throw new Error(`The word "${key}" of the vis-2 widget has no text in "${lang}"`);
        }
        text[lang] = capitalize ? word.charAt(0).toLocaleUpperCase(lang) + word.slice(1) : word;
    }
    return text as WebComponentText;
}

export const profileManifest: WebComponentManifest = {
    $schema: 'https://raw.githubusercontent.com/ioBroker/web-components/main/schemas/manifest.json',
    manifestVersion: 1,
    tag: TAG,
    // the label of the vis-2 widget: `visWidgetLabel: 'scheduler'`
    name: widgetWord('scheduler', true),
    description: {
        en: 'Shows and edits a profile of the scheduler: the value of each interval of the day and the days of the week',
        de: 'Zeigt und bearbeitet ein Profil des Planers: den Wert jedes Intervalls des Tages und die Wochentage',
        ru: 'Показывает и редактирует профиль планировщика: значение каждого интервала дня и дни недели',
        pt: 'Mostra e edita um perfil do agendador: o valor de cada intervalo do dia e os dias da semana',
        nl: 'Toont en bewerkt een profiel van de planner: de waarde van elk interval van de dag en de dagen van de week',
        fr: 'Affiche et modifie un profil du planificateur : la valeur de chaque intervalle de la journée et les jours de la semaine',
        it: 'Mostra e modifica un profilo del pianificatore: il valore di ogni intervallo del giorno e i giorni della settimana',
        es: 'Muestra y edita un perfil del planificador: el valor de cada intervalo del día y los días de la semana',
        pl: 'Wyświetla i edytuje profil harmonogramu: wartość każdego przedziału dnia i dni tygodnia',
        uk: 'Показує та редагує профіль планувальника: значення кожного інтервалу дня та дні тижня',
        'zh-cn': '显示并编辑调度器的配置文件：一天中每个时间段的值以及星期几',
    },
    // relative to this file: /adapter/scheduler/scheduler.png
    icon: '../scheduler.png',
    module: MODULE_FILE,
    // the vis-2 widget is 355 px high by default
    size: { width: 640, height: 355 },
    settings: {
        type: 'panel',
        items: {
            profile: {
                type: 'objectId',
                types: 'state',
                // every instance of the adapter; the element takes the instance from the ID
                root: 'scheduler',
                label: {
                    en: 'Profile',
                    de: 'Profil',
                    ru: 'Профиль',
                    pt: 'Perfil',
                    nl: 'Profiel',
                    fr: 'Profil',
                    it: 'Profilo',
                    es: 'Perfil',
                    pl: 'Profil',
                    uk: 'Профіль',
                    'zh-cn': '配置文件',
                },
                help: {
                    en: 'A state of the profile, e.g. scheduler.0.<profile>_active',
                    de: 'Ein Datenpunkt des Profils, z. B. scheduler.0.<Profil>_active',
                    ru: 'Состояние профиля, например scheduler.0.<профиль>_active',
                    pt: 'Um estado do perfil, p. ex. scheduler.0.<perfil>_active',
                    nl: 'Een toestand van het profiel, bijv. scheduler.0.<profiel>_active',
                    fr: 'Un état du profil, p. ex. scheduler.0.<profil>_active',
                    it: 'Uno stato del profilo, ad es. scheduler.0.<profilo>_active',
                    es: 'Un estado del perfil, p. ej. scheduler.0.<perfil>_active',
                    pl: 'Stan profilu, np. scheduler.0.<profil>_active',
                    uk: 'Стан профілю, напр. scheduler.0.<профіль>_active',
                    'zh-cn': '配置文件的一个状态，例如 scheduler.0.<配置文件>_active',
                },
            },
            title: {
                type: 'text',
                label: {
                    en: 'Title',
                    de: 'Titel',
                    ru: 'Заголовок',
                    pt: 'Título',
                    nl: 'Titel',
                    fr: 'Titre',
                    it: 'Titolo',
                    es: 'Título',
                    pl: 'Tytuł',
                    uk: 'Заголовок',
                    'zh-cn': '标题',
                },
                help: {
                    en: 'Shown above the profile; empty: no title',
                    de: 'Über dem Profil angezeigt; leer: kein Titel',
                    ru: 'Показывается над профилем; пусто: без заголовка',
                    pt: 'Mostrado acima do perfil; vazio: sem título',
                    nl: 'Boven het profiel getoond; leeg: geen titel',
                    fr: 'Affiché au-dessus du profil ; vide : pas de titre',
                    it: 'Mostrato sopra il profilo; vuoto: nessun titolo',
                    es: 'Se muestra encima del perfil; vacío: sin título',
                    pl: 'Wyświetlany nad profilem; puste: bez tytułu',
                    uk: 'Показується над профілем; порожньо: без заголовка',
                    'zh-cn': '显示在配置文件上方；为空时不显示标题',
                },
            },
            readOnly: {
                type: 'checkbox',
                default: false,
                label: {
                    en: 'Read only',
                    de: 'Schreibgeschützt',
                    ru: 'Только чтение',
                    pt: 'Somente leitura',
                    nl: 'Alleen lezen',
                    fr: 'Lecture seule',
                    it: 'Sola lettura',
                    es: 'Solo lectura',
                    pl: 'Tylko do odczytu',
                    uk: 'Лише для читання',
                    'zh-cn': '只读',
                },
            },
            hideDow: {
                type: 'checkbox',
                default: false,
                label: widgetWord('hide_days_of_week'),
            },
        },
    },
};
