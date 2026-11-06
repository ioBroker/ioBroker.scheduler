import{createRoot as e,useEffect as t,useLayoutEffect as n,useMemo as r,useRef as i,useState as a,jsx as o,jsxs as s}from"../../../lib/esm/react-19.js";var c=`iob-dialog-close`;function l(e){return!!e.form}var u=[`header`,`staticText`,`divider`];function d(e,t){return e==null?``:typeof e==`object`?e[t]||e.en||Object.values(e).find(e=>!!e)||``:String(e)}function f(e){let t={};for(let[n,r]of Object.entries(e.items||{}))r&&!u.includes(r.type)&&(t[n]=r.type);return t}function p(e){return typeof e==`string`?e:typeof e==`number`||typeof e==`boolean`?e.toString():JSON.stringify(e)}function m(e,t){if(t!=null)switch(e){case`number`:case`slider`:{if(typeof t==`number`)return Number.isFinite(t)?t:void 0;let e=p(t).trim().replace(`,`,`.`);if(!e)return;let n=Number(e);return Number.isFinite(n)?n:void 0}case`checkbox`:return t===!0||t===`true`||t===1||t===`1`;default:return p(t)}}function h(e,t){let n={};for(let[r,i]of Object.entries(e)){let e=m(i,t[r]);e!==void 0&&(n[r]=e)}return n}var g=`"Roboto", "Helvetica", "Arial", sans-serif`,_=Object.freeze({type:`light`,primary:`#3399CC`,primaryContrast:`#FFFFFF`,secondary:`#164477`,secondaryContrast:`#FFFFFF`,background:`#FFFFFF`,paper:`#FFFFFF`,text:`rgba(0, 0, 0, 0.87)`,textSecondary:`rgba(0, 0, 0, 0.6)`,divider:`rgba(0, 0, 0, 0.12)`,error:`#D32F2F`,warning:`#ED6C02`,info:`#0288D1`,success:`#2E7D32`,fontFamily:g,fontSize:14,borderRadius:4}),v=Object.freeze({type:`dark`,primary:`#4DABF5`,primaryContrast:`rgba(0, 0, 0, 0.87)`,secondary:`#436A93`,secondaryContrast:`#FFFFFF`,background:`#121212`,paper:`#121212`,text:`#FFFFFF`,textSecondary:`rgba(255, 255, 255, 0.7)`,divider:`rgba(255, 255, 255, 0.12)`,error:`#F44336`,warning:`#FFA726`,info:`#29B6F6`,success:`#66BB6A`,fontFamily:g,fontSize:14,borderRadius:4}),y=[`primary`,`primaryContrast`,`secondary`,`secondaryContrast`,`background`,`paper`,`text`,`textSecondary`,`divider`,`error`,`warning`,`info`,`success`,`fontFamily`],b=[`fontSize`,`borderRadius`];function x(e){return{...e===`dark`?v:_}}function S(e){if(!e||typeof e!=`object`)return x(typeof e==`string`?e:`light`);let t=e,n=x(typeof t.type==`string`?t.type:`light`);for(let e of y){let r=t[e];typeof r==`string`&&r.trim()&&(n[e]=r.trim())}for(let e of b){let r=t[e],i=typeof r==`string`?parseFloat(r):r;typeof i==`number`&&Number.isFinite(i)&&i>=0&&(n[e]=i)}return n}function C(e,t){return e.type===t.type&&y.every(n=>e[n]===t[n])&&b.every(n=>e[n]===t[n])}function w(e){return`--iob-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function T(e){let t={};for(let n of y)t[w(n)]=e[n];for(let n of b)t[w(n)]=`${e[n]}px`;return t[`color-scheme`]=e.type,t}var E={ok:{en:`OK`,"zh-cn":`确定`},cancel:{en:`Cancel`,de:`Abbrechen`,ru:`Отмена`,pt:`Cancelar`,nl:`Annuleren`,fr:`Annuler`,it:`Annulla`,es:`Cancelar`,pl:`Anuluj`,uk:`Скасувати`,"zh-cn":`取消`},close:{en:`Close`,de:`Schließen`,ru:`Закрыть`,pt:`Fechar`,nl:`Sluiten`,fr:`Fermer`,it:`Chiudi`,es:`Cerrar`,pl:`Zamknij`,uk:`Закрити`,"zh-cn":`关闭`}},D=`
dialog {
    box-sizing: border-box;
    width: 480px;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    padding: 0;
    border: 0;
    border-radius: calc(var(--iob-border-radius) * 2);
    background: var(--iob-paper);
    color: var(--iob-text);
    font-family: var(--iob-font-family);
    font-size: var(--iob-font-size);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
/* as the dialogs of MUI: a dark paper gets lighter the higher it lies */
dialog.dark { background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)); }
dialog::backdrop { background: rgba(0, 0, 0, 0.5); }
dialog:focus { outline: none; }
form { display: flex; flex-direction: column; height: 100%; max-height: inherit; margin: 0; }
header { display: flex; align-items: center; gap: 8px; padding: 12px 8px 12px 16px; font-size: 1.15em; font-weight: 500; }
header span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.body { flex: 1; min-height: 0; padding: 0 16px 16px; overflow: auto; display: flex; flex-direction: column; gap: 12px; }
footer { display: flex; justify-content: flex-end; gap: 8px; padding: 0 16px 16px; }
button { font: inherit; padding: 6px 16px; border-radius: var(--iob-border-radius); border: 1px solid var(--iob-primary); background: transparent; color: var(--iob-primary); cursor: pointer; }
button.primary { background: var(--iob-primary); color: var(--iob-primary-contrast); }
button.close { border: 0; padding: 2px 8px; font-size: 1.4em; line-height: 1; color: var(--iob-text-secondary); }
label { display: flex; flex-direction: column; gap: 4px; }
label.check { flex-direction: row; align-items: center; gap: 8px; }
input, select, textarea { font: inherit; accent-color: var(--iob-primary); }
.help { color: var(--iob-text-secondary); font-size: 0.85em; }
h3 { margin: 4px 0 0; font-size: 1em; }
p { margin: 0; }
hr { width: 100%; border: 0; border-top: 1px solid var(--iob-divider); margin: 0; }
[hidden] { display: none !important; }
`;function O(e){if(!e)return null;try{let t=Function(`data`,`return (${e});`);return e=>{try{return!!t(e)}catch{return!1}}}catch{return null}}function k(e){return typeof e==`string`?e:typeof e==`number`||typeof e==`boolean`?String(e):``}function A(e){let{input:t,setting:n}=e;if(t)return t instanceof HTMLInputElement&&t.type===`checkbox`?t.checked:t instanceof HTMLSelectElement?n.options?.[t.selectedIndex]?.value:t.value}function j(e,t,n,r,i){let a={name:t,setting:n,box:e.createElement(`div`),hidden:O(n.hidden),disabled:O(n.disabled)},o=d(n.label,i);switch(n.type){case`header`:return a.box=e.createElement(`h3`),a.box.textContent=d(n.text,i)||o,a;case`staticText`:return a.box=e.createElement(`p`),a.box.textContent=d(n.text,i)||o,a;case`divider`:return a.box=e.createElement(`hr`),a}let s=e.createElement(`label`);a.box=s;let c=e.createElement(`span`);if(c.textContent=o||t,n.type===`checkbox`){let t=e.createElement(`input`);t.type=`checkbox`,t.checked=r===!0||r===`true`,s.className=`check`,s.append(t,c),a.input=t}else if(n.type===`select`){let t=e.createElement(`select`);for(let r of n.options||[]){let n=e.createElement(`option`);n.textContent=d(r.label,i),t.append(n)}let o=(n.options||[]).findIndex(e=>String(e.value)===k(r));t.selectedIndex=o===-1?0:o,s.append(c,t),a.input=t}else if(n.type===`text`&&(n.minRows||1)>1){let t=e.createElement(`textarea`);t.rows=n.minRows||2,t.value=k(r),s.append(c,t),a.input=t}else{let t=e.createElement(`input`),i=k(r);switch(n.type){case`number`:case`slider`:t.type=n.type===`slider`?`range`:`number`,n.min!==void 0&&(t.min=String(n.min)),n.max!==void 0&&(t.max=String(n.max)),t.step=n.step===void 0?`any`:String(n.step);break;case`password`:t.type=`password`;break;case`color`:t.type=!i||/^#[0-9a-f]{6}$/i.test(i)?`color`:`text`;break;default:t.type=`text`}if(t.value=i,t.type===`range`){let n=e.createElement(`output`);n.textContent=t.value,t.addEventListener(`input`,()=>n.textContent=t.value),c.append(`: `,n)}s.append(c,t),a.input=t}if(n.help){let t=e.createElement(`span`);t.className=`help`,t.textContent=d(n.help,i),s.append(t)}return a}function M(e,t={}){let n=t.lang||`en`,r=document,i=e=>E[e][n]||E[e].en||e,a=r.createElement(`div`);a.setAttribute(`data-iob-dialog`,``);let o=a.attachShadow({mode:`open`}),s=r.createElement(`style`);s.textContent=D;let u=r.createElement(`dialog`),p=S(t.theme);u.className=p.type===`dark`?`dark`:``;for(let[e,t]of Object.entries(T(p)))u.style.setProperty(e,t);e.width&&(u.style.width=`${e.width}px`),e.height&&(u.style.height=`${e.height}px`);let m=r.createElement(`form`),g=r.createElement(`header`),_=r.createElement(`span`);_.textContent=d(e.title,n);let v=r.createElement(`button`);v.type=`button`,v.className=`close`,v.title=i(`close`),v.setAttribute(`aria-label`,i(`close`)),v.textContent=`×`,g.append(_,v);let y=r.createElement(`div`);return y.className=`body`,m.append(g,y),u.append(m),o.append(s,u),new Promise(t=>{let s=!1,p=e=>{s||(s=!0,u.open&&u.close(),a.remove(),t(e))};if(v.addEventListener(`click`,()=>p(null)),u.addEventListener(`close`,()=>p(null)),m.addEventListener(`submit`,e=>e.preventDefault()),l(e)){let t={},a=[];for(let[t,i]of Object.entries(e.form.items||{})){let o=e.data?.[t]??i.default,s=j(r,t,i,o,n);a.push(s),y.append(s.box)}let o=()=>{for(let e of a)e.input&&(t[e.name]=A(e));return t},s=()=>{let e=o();for(let t of a)t.box.hidden=t.hidden?t.hidden(e):!1,t.input&&(t.input.disabled=t.disabled?t.disabled(e):!1)};m.addEventListener(`input`,s),m.addEventListener(`change`,s),s();let c=a.find(e=>e.input&&!e.box.hidden&&!e.input.disabled);c?.input&&(c.input.autofocus=!0);let l=r.createElement(`footer`),u=r.createElement(`button`);u.type=`button`,u.textContent=d(e.cancel,n)||i(`cancel`),u.addEventListener(`click`,()=>p(null));let g=r.createElement(`button`);g.type=`submit`,g.className=`primary`,g.textContent=d(e.ok,n)||i(`ok`),l.append(u,g),m.append(l),m.addEventListener(`submit`,()=>p(h(f(e.form),o())))}else y.append(e.element),u.addEventListener(c,e=>p(e.detail??null));r.body.append(a),u.showModal(),o.activeElement&&o.activeElement!==v||(u.tabIndex=-1,u.focus())})}function N(e){return[...new Set(e.filter(e=>typeof e==`string`&&!!e))]}var P=[`socket`,`dialogs`,`theme`,`editMode`,`settings`,`value`],F=class extends HTMLElement{states={};objects={};#e=null;#t={};#n=S(`light`);#r=!1;#i=null;#a=void 0;#o=null;#s=!1;#c=(e,t)=>{this.#o?.states.includes(e)&&(this.states[e]=t||null,this.#_())};#l=(e,t)=>{this.#o?.objects.includes(e)&&(this.objects[e]=t||null,this.#d())};get socket(){return this.#e}set socket(e){this.#e=e||null,this.#d()}get settings(){return this.#t}set settings(e){this.#t=e||{},this.#d()}get theme(){return this.#n}set theme(e){let t=S(e);C(t,this.#n)||(this.#n=t,this.#u(),this.#_())}get editMode(){return this.#r}set editMode(e){let t=!!e;t!==this.#r&&(this.#r=t,this.#_())}get dialogs(){return this.#i}set dialogs(e){this.#i=e||null}get value(){return this.#a}set value(e){e!==this.#a&&(this.#a=e,this.#_())}connectedCallback(){for(let e of P)if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}this.#u(),this.#d()}disconnectedCallback(){this.#g()}getStateIds(e){return[]}getObjectIds(e){return[]}get systemLang(){return this.#e?.systemLang||`en`}text(e){return d(e,this.systemLang)}setState(e,t){return this.#e&&!this.#r?this.#e.setState(e,t):Promise.resolve()}changeValue(e){return this.#r||this.emit(`iob-change`,e)?!1:(this.value=e,!0)}emit(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}async openDialog(e){if(this.#r)return null;let t=this.#i?await this.#i.open(e):await M(e,{lang:this.systemLang,theme:this.#n});return l(e)?t&&typeof t==`object`?h(f(e.form),t):null:t??null}#u(){for(let[e,t]of Object.entries(T(this.#n)))this.style.setProperty(e,t)}#d(){if(!this.isConnected)return;let e=this.#e,t=e?N(this.getStateIds(this.#t)):[],n=e?N(this.getObjectIds(this.#t)):[];this.#o&&this.#o.socket!==e&&this.#g();let r=this.#o?.states||[],i=this.#o?.objects||[],a=r.filter(e=>!t.includes(e)),o=i.filter(e=>!n.includes(e)),s=t.filter(e=>!r.includes(e)),c=n.filter(e=>!i.includes(e));e&&a.length&&e.unsubscribeState(a,this.#c),e&&o.length&&this.#h(e,o);for(let e of a)delete this.states[e];for(let e of[...a,...o])!t.includes(e)&&!n.includes(e)&&delete this.objects[e];this.#o=e&&(t.length||n.length)?{socket:e,states:t,objects:n}:null,e&&s.length&&this.#p(e,s),e&&c.length&&this.#m(e,c),this.#_()}#f(e,t,n){return this.#o?.socket===e&&this.#o[t].includes(n)}#p(e,t){e.subscribeState(t,this.#c).catch(e=>console.warn(`<${this.localName}>: cannot subscribe ${t.join(`, `)}: ${e}`));for(let n of t)e.getState(n).then(t=>{this.#f(e,`states`,n)&&this.states[n]===void 0&&(this.states[n]=t||null,this.#_())}).catch(()=>{}),e.getObject(n).then(t=>{this.#f(e,`states`,n)&&!this.#f(e,`objects`,n)&&(this.objects[n]=t||null,this.#_())}).catch(()=>{})}#m(e,t){e.subscribeObject(t,this.#l).catch(e=>console.warn(`<${this.localName}>: cannot subscribe the objects ${t.join(`, `)}: ${e}`));for(let n of t)e.getObject(n).then(t=>{this.#f(e,`objects`,n)&&(this.objects[n]=t||null,this.#d())}).catch(()=>{})}#h(e,t){e.unsubscribeObject(t,this.#l).catch(()=>{})}#g(){if(this.#o){let{socket:e,states:t,objects:n}=this.#o;t.length&&e.unsubscribeState(t,this.#c),n.length&&this.#h(e,n),this.#o=null}this.states={},this.objects={}}#_(){this.#s||(this.#s=!0,queueMicrotask(()=>{this.#s=!1,this.isConnected&&this.render()}))}};function I(e,t){let n=typeof e==`string`?e:e.tag;customElements.get(n)||customElements.define(n,t)}var L=`iob-scheduler-profile`,R=`setProfile`,z={chooseProfile:`Choose a profile in the settings`,notProfile:`No profile of the scheduler belongs to this state`,noInstance:`Scheduler instance not found`,notRunning:`The instance is not running`,waiting:`Changes are saved as soon as it runs`,notSaved:`Not saved`,noAnswer:`No answer from the instance`,saving:`Saving…`,select:`Select: a change then applies to all selected intervals`,days:`Days of the week`,intervals:`Intervals`,holiday:`Holiday`,now:`Now`,on:`On`,off:`Off`},B={en:z,de:{chooseProfile:`Profil in den Einstellungen wählen`,notProfile:`Zu diesem Datenpunkt gehört kein Profil des Planers`,noInstance:`Instanz des Planers nicht gefunden`,notRunning:`Die Instanz läuft nicht`,waiting:`Änderungen werden gespeichert, sobald sie läuft`,notSaved:`Nicht gespeichert`,noAnswer:`Keine Antwort von der Instanz`,saving:`Speichern…`,select:`Auswählen: eine Änderung gilt dann für alle ausgewählten Intervalle`,days:`Wochentage`,intervals:`Intervalle`,holiday:`Feiertag`,now:`Jetzt`,on:`An`,off:`Aus`},ru:{chooseProfile:`Выберите профиль в настройках`,notProfile:`Этому состоянию не соответствует ни один профиль планировщика`,noInstance:`Экземпляр планировщика не найден`,notRunning:`Экземпляр не запущен`,waiting:`Изменения сохранятся, как только он запустится`,notSaved:`Не сохранено`,noAnswer:`Нет ответа от экземпляра`,saving:`Сохранение…`,select:`Выбрать: изменение применится ко всем выбранным интервалам`,days:`Дни недели`,intervals:`Интервалы`,holiday:`Праздник`,now:`Сейчас`,on:`Вкл`,off:`Выкл`},pt:{chooseProfile:`Escolha um perfil nas configurações`,notProfile:`Nenhum perfil do agendador pertence a este estado`,noInstance:`Instância do agendador não encontrada`,notRunning:`A instância não está em execução`,waiting:`As alterações são guardadas assim que estiver em execução`,notSaved:`Não guardado`,noAnswer:`Sem resposta da instância`,saving:`A guardar…`,select:`Selecionar: uma alteração aplica-se então a todos os intervalos selecionados`,days:`Dias da semana`,intervals:`Intervalos`,holiday:`Feriado`,now:`Agora`,on:`Ligado`,off:`Desligado`},nl:{chooseProfile:`Kies een profiel in de instellingen`,notProfile:`Bij deze toestand hoort geen profiel van de planner`,noInstance:`Instantie van de planner niet gevonden`,notRunning:`De instantie draait niet`,waiting:`Wijzigingen worden opgeslagen zodra ze draait`,notSaved:`Niet opgeslagen`,noAnswer:`Geen antwoord van de instantie`,saving:`Opslaan…`,select:`Selecteren: een wijziging geldt dan voor alle geselecteerde intervallen`,days:`Dagen van de week`,intervals:`Intervallen`,holiday:`Feestdag`,now:`Nu`,on:`Aan`,off:`Uit`},fr:{chooseProfile:`Choisissez un profil dans les paramètres`,notProfile:`Aucun profil du planificateur ne correspond à cet état`,noInstance:`Instance du planificateur introuvable`,notRunning:`L'instance n'est pas démarrée`,waiting:`Les modifications seront enregistrées dès son démarrage`,notSaved:`Non enregistré`,noAnswer:`Pas de réponse de l'instance`,saving:`Enregistrement…`,select:`Sélectionner : une modification s'applique alors à tous les intervalles sélectionnés`,days:`Jours de la semaine`,intervals:`Intervalles`,holiday:`Jour férié`,now:`Maintenant`,on:`Marche`,off:`Arrêt`},it:{chooseProfile:`Scegli un profilo nelle impostazioni`,notProfile:`Nessun profilo del pianificatore corrisponde a questo stato`,noInstance:`Istanza del pianificatore non trovata`,notRunning:`L'istanza non è in esecuzione`,waiting:`Le modifiche vengono salvate non appena è in esecuzione`,notSaved:`Non salvato`,noAnswer:`Nessuna risposta dall'istanza`,saving:`Salvataggio…`,select:`Seleziona: una modifica vale poi per tutti gli intervalli selezionati`,days:`Giorni della settimana`,intervals:`Intervalli`,holiday:`Festivo`,now:`Ora`,on:`Acceso`,off:`Spento`},es:{chooseProfile:`Elija un perfil en la configuración`,notProfile:`Ningún perfil del planificador corresponde a este estado`,noInstance:`No se encontró la instancia del planificador`,notRunning:`La instancia no se está ejecutando`,waiting:`Los cambios se guardarán en cuanto se ejecute`,notSaved:`No guardado`,noAnswer:`Sin respuesta de la instancia`,saving:`Guardando…`,select:`Seleccionar: un cambio se aplica entonces a todos los intervalos seleccionados`,days:`Días de la semana`,intervals:`Intervalos`,holiday:`Festivo`,now:`Ahora`,on:`Encendido`,off:`Apagado`},pl:{chooseProfile:`Wybierz profil w ustawieniach`,notProfile:`Do tego stanu nie należy żaden profil harmonogramu`,noInstance:`Nie znaleziono instancji harmonogramu`,notRunning:`Instancja nie działa`,waiting:`Zmiany zostaną zapisane, gdy tylko zacznie działać`,notSaved:`Nie zapisano`,noAnswer:`Brak odpowiedzi od instancji`,saving:`Zapisywanie…`,select:`Zaznacz: zmiana dotyczy wtedy wszystkich zaznaczonych przedziałów`,days:`Dni tygodnia`,intervals:`Przedziały`,holiday:`Święto`,now:`Teraz`,on:`Wł.`,off:`Wył.`},uk:{chooseProfile:`Виберіть профіль у налаштуваннях`,notProfile:`Цьому стану не відповідає жоден профіль планувальника`,noInstance:`Екземпляр планувальника не знайдено`,notRunning:`Екземпляр не запущено`,waiting:`Зміни буде збережено, щойно він запуститься`,notSaved:`Не збережено`,noAnswer:`Немає відповіді від екземпляра`,saving:`Збереження…`,select:`Вибрати: зміна застосується до всіх вибраних інтервалів`,days:`Дні тижня`,intervals:`Інтервали`,holiday:`Свято`,now:`Зараз`,on:`Увімк.`,off:`Вимк.`},"zh-cn":{chooseProfile:`请在设置中选择配置文件`,notProfile:`此状态不属于调度器的任何配置文件`,noInstance:`未找到调度器实例`,notRunning:`实例未运行`,waiting:`实例运行后将立即保存更改`,notSaved:`未保存`,noAnswer:`实例无响应`,saving:`正在保存…`,select:`选择：更改将应用于所有选中的时间段`,days:`星期`,intervals:`时间段`,holiday:`节假日`,now:`现在`,on:`开`,off:`关`}};function ee(e,t){return B[e]?.[t]||z[t]}var te={temperature:{min:0,max:28,step:.5,unit:`°`},percent:{min:0,max:100,unit:`%`},onoff:{min:0,max:1}},ne=/[^._\-/ :!#$%&()+=@^{}|~\p{Ll}\p{Lu}\p{Nd}]+/gu;function V(e){let t=typeof e==`string`?e.trim():``,n=t.match(/^(scheduler\.\d+)\.[^.]/);return n?{instance:n[1],id:t}:null}function H(e,t,n){let r=[],i=t;for(let t=0;i&&t<100;t++){if(r.unshift(String(i.title??``).replace(ne,`_`).replace(/\./g,`_`)),!i.parent)return`${e}.${r.join(`.`)}`;let t=i.parent;i=n.find(e=>e.id===t)}return null}function U(e,t){let n=e?.native?.profiles;if(!Array.isArray(n))return null;for(let e of n){if(e?.type!==`profile`||!e.data||!Array.isArray(e.data.intervals))continue;let r=H(t.instance,e,n);if(r&&(t.id===r||t.id===`${r}_active`))return e}return null}function re(e,t){let n=e?.native?.profiles;return Array.isArray(n)&&n.find(e=>e?.id===t&&e.type===`profile`)||null}function ie(e){let{intervals:t,dow:n,holiday:r}=W(e);return{intervals:t,dow:n,holiday:r}}function W(e){return{type:e.type,intervalDuration:Number(e.intervalDuration)||1,intervals:e.intervals.map(e=>Number(e)||0),dow:Array.isArray(e.dow)?e.dow:[],holiday:!!e.holiday}}function G(e,t){let n=W(e);return n.holiday===t.holiday&&n.intervals.join(`,`)===t.intervals.join(`,`)&&[...n.dow].sort().join(`,`)===[...t.dow].sort().join(`,`)}var ae=te;function K(e,t){let n=t?.type===`state`?t.common:void 0;if(e===`custom`){let e=n?.unit||``;if(n?.type===`number`&&n.states&&typeof n.states==`object`&&!Array.isArray(n.states)){let t=Object.entries(n.states).map(([e,t])=>({value:parseFloat(e),label:String(t)})).filter(e=>Number.isFinite(e.value)).sort((e,t)=>e.value-t.value);if(t.length)return{min:t[0].value,max:t[t.length-1].value,step:1,unit:e,marks:t}}return n?.type===`number`&&(n.min!==void 0||n.max!==void 0)?{min:n.min??0,max:n.max??100,step:1,unit:e,marks:[]}:{min:0,max:100,step:1,unit:e,marks:[]}}let r=ae[e]||{min:0,max:100};return{min:r.min,max:r.max,step:r.step||1,unit:e===`temperature`&&n?.unit||r.unit||``,marks:[]}}function q(e,t){if(t.marks.length){let n=t.marks[0].value;for(let r of t.marks)Math.abs(r.value-e)<Math.abs(n-e)&&(n=r.value);return n}let n=Math.min(t.max,Math.max(t.min,e)),r=t.min+Math.round((n-t.min)/t.step)*t.step;return Math.min(t.max,Math.max(t.min,Number(r.toFixed(4))))}function oe(e,t,n){if(t.marks.length){let r=t.marks.map(e=>e.value);return(n?r.find(t=>t>e):[...r].reverse().find(t=>t<e))??q(e,t)}return q(e+(n?t.step:-t.step),t)}function se(e,t){let n=t.max-t.min;return n>0?Math.min(1,Math.max(0,(e-t.min)/n)):+(e>=t.max)}function ce(e,t){let n=e*t,r=Math.floor(n);return{hours:r,minutes:String(Math.round((n-r)*60)).padStart(2,`0`)}}function le(e,t){return Math.floor((e.getHours()+e.getMinutes()/60)/t)}function ue(e){try{let t=new Intl.DateTimeFormat(e===`zh-cn`?`zh-CN`:e,{weekday:`short`,timeZone:`UTC`});return[0,1,2,3,4,5,6].map(e=>t.format(new Date(Date.UTC(2024,0,7+e))).replace(/\.$/,``))}catch{return[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`]}}var J={type:`temperature`,intervalDuration:1,intervals:[17,17,17,17,17,17,21,21,21,19,19,19,19,19,19,19,19,21.5,21.5,21.5,21.5,21.5,21.5,17],dow:[1,2,3,4,5],holiday:!1},de=`M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z`,fe=[1,2,3,4,5,6,0],pe=[0,1,2,3,4,5,6];function me(){let[e,n]=a(()=>/* @__PURE__ */ new Date);return t(()=>{let e=setInterval(()=>n(/* @__PURE__ */ new Date),3e4);return()=>clearInterval(e)},[]),e}function he(e,t,n,r){if(n===`onoff`)return{text:r(e?`on`:`off`),unit:``};let i=t.marks.find(t=>t.value===e);return i?{text:i.label,unit:``}:{text:String(Number(e.toFixed(2))),unit:t.unit}}function Y({text:e,editMode:t}){return/* @__PURE__ */ o(`div`,{className:`box${t?` edit`:``}`,children:/* @__PURE__ */ s(`div`,{className:`hint`,children:[/* @__PURE__ */ o(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:/* @__PURE__ */ o(`path`,{d:de})}),/* @__PURE__ */ o(`span`,{children:e})]})})}function X(e){let{profile:t,range:c,word:l,editable:u,status:d}=e,f=t.intervals.length,p=t.intervalDuration,m=me(),h=le(m,p),g=r(()=>ue(e.lang),[e.lang]),[_,v]=a(null),[y,b]=a([]),[x,S]=a(null),C=i(null),w=i(null),T=t.intervals.join(`,`),E=!!_&&!_.dragging&&_.base!==T;E&&v(null);let D=_&&!E?_.values:t.intervals,O=Math.min(f-1,Math.max(0,x??h));n(()=>{let e=C.current;if(e&&e.scrollWidth>e.clientWidth){let t=/* @__PURE__ */ new Date,n=(t.getHours()+t.getMinutes()/60)/24;e.scrollLeft=Math.max(0,n*e.scrollWidth-e.clientWidth/2)}},[]);let k=(t,n)=>{t.join(`,`)===n.join(`,`)?v(null):(v({values:t,base:T,dragging:!1}),e.onIntervals(t))},A=(e,t,n)=>{e.applied=!0;let r=e.colWidth>0?Math.floor((t-e.left)/e.colWidth):e.start;r=Math.min(f-1,Math.max(0,r)),e.painting||(!e.group&&r!==e.start&&Math.abs(t-e.startX)>e.colWidth*.6?e.painting=!0:r=e.start);let i=e.toggled;if(i===null){let t=e.height>0?(e.top+e.height-n)/e.height:0;i=q(c.min+Math.min(1,Math.max(0,t))*(c.max-c.min),c)}let a=[...e.values];if(e.group)e.group.forEach(e=>a[e]=i);else{let t=Math.min(e.last,r),n=Math.max(e.last,r);for(let e=t;e<=n;e++)a[e]=i;e.last=r}e.values=a,v({values:a,base:T,dragging:!0})},j=e=>{if(!u||e.button!==0)return;let n=e.target.closest(`.track`),r=Number(n?.dataset.index);if(!n||!Number.isInteger(r))return;let i=e.currentTarget.getBoundingClientRect(),a=n.getBoundingClientRect(),o=y.includes(r)?y:null;!o&&y.length&&b([]);let s=[...D],c={pointerId:e.pointerId,touch:e.pointerType!==`mouse`,applied:!1,start:r,startX:e.clientX,left:i.left,colWidth:i.width/f,top:a.top,height:a.height,base:s,values:s,last:r,painting:!1,group:o,toggled:t.type===`onoff`?+!s[r]:null};w.current=c,S(r),n.focus({preventScroll:!0});try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}c.touch||A(c,e.clientX,e.clientY)},M=e=>{let t=w.current;t?.pointerId===e.pointerId&&A(t,e.clientX,e.clientY)},N=e=>{let t=w.current;t?.pointerId===e.pointerId&&(t.applied||A(t,e.clientX,e.clientY),w.current=null,k(t.values,t.base))},P=e=>{w.current?.pointerId===e.pointerId&&(w.current=null,v(null))},F=e=>{u&&b(y.includes(e)?y.filter(t=>t!==e):[...y,e].sort((e,t)=>e-t))},I=e=>{S(e),C.current?.querySelector(`.track[data-index="${e}"]`)?.focus()},L=(e,n)=>{switch(e.key){case`ArrowLeft`:case`ArrowRight`:case`Home`:case`End`:{let t={ArrowLeft:n-1,ArrowRight:n+1,Home:0,End:f-1}[e.key];t>=0&&t<f&&I(t);break}case`ArrowUp`:case`ArrowDown`:{if(!u)return;let r=e.key===`ArrowUp`,i=t.type===`onoff`?+!!r:oe(D[n],c,r),a=y.includes(n)?y:[n];!y.includes(n)&&y.length&&b([]);let o=[...D];a.forEach(e=>o[e]=i),k(o,D);break}case` `:case`Enter`:F(n);break;default:return}e.preventDefault()},R=[`box`];u&&R.push(`editable`),e.editMode&&R.push(`edit`),e.sample&&R.push(`sample`);let z=e.mondayFirst?fe:pe,B=(m.getHours()+m.getMinutes()/60)/24*100;return/* @__PURE__ */ s(`div`,{className:R.join(` `),children:[d.saving?/* @__PURE__ */ o(`div`,{className:`progress`,role:`progressbar`,"aria-label":l(`saving`)}):null,e.title?/* @__PURE__ */ o(`div`,{className:`title`,children:e.title}):null,/* @__PURE__ */ s(`div`,{className:`main`,children:[/* @__PURE__ */ o(`div`,{className:`chart`,children:/* @__PURE__ */ o(`div`,{className:`scroller`,ref:C,children:/* @__PURE__ */ s(`div`,{className:p<1?`strip fine`:`strip`,style:{"--count":f},role:`group`,"aria-label":l(`intervals`),onPointerDown:j,onPointerMove:M,onPointerUp:N,onPointerCancel:P,onLostPointerCapture:P,children:[D.map((e,n)=>{let r=ce(n,p),i=he(e,c,t.type,l),a=i.text+i.unit,d=`${r.hours}:${r.minutes}`,f=[`col`];n===h&&f.push(`current`),y.includes(n)&&f.push(`selected`);let m=`value`;return t.type===`onoff`&&(m+=e?` on`:` off`),/* @__PURE__ */ s(`div`,{className:f.join(` `),children:[/* @__PURE__ */ s(`div`,{className:m,title:a,children:[i.text,i.unit?/* @__PURE__ */ o(`span`,{className:`unit`,children:i.unit}):null]}),/* @__PURE__ */ o(`div`,{className:`track`,"data-index":n,role:`slider`,tabIndex:n===O?0:-1,"aria-label":d,"aria-valuemin":c.min,"aria-valuemax":c.max,"aria-valuenow":e,"aria-valuetext":a,"aria-readonly":!u,onFocus:()=>S(n),onKeyDown:e=>L(e,n),children:/* @__PURE__ */ o(`div`,{className:`bar`,style:{height:`${se(e,c)*100}%`}})}),/* @__PURE__ */ s(`button`,{type:`button`,className:`time`,tabIndex:-1,disabled:!u,"aria-pressed":y.includes(n),"aria-label":d,title:u?l(`select`):d,onClick:()=>F(n),children:[r.hours,p<1?/* @__PURE__ */ s(`small`,{children:[`:`,r.minutes]}):null]})]},n)}),/* @__PURE__ */ o(`div`,{className:`now`,style:{left:`${B}%`},"aria-hidden":`true`})]})})}),e.showDow?/* @__PURE__ */ s(`div`,{className:`days`,role:`group`,"aria-label":l(`days`),children:[z.map(n=>{let r=t.dow.includes(n);return/* @__PURE__ */ o(`button`,{type:`button`,className:`day`,"aria-pressed":r,disabled:!u,title:g[n],onClick:()=>e.onDays(r?t.dow.filter(e=>e!==n):[...t.dow,n],t.holiday),children:g[n]},n)}),e.holidayVisible?/* @__PURE__ */ o(`button`,{type:`button`,className:`day`,"aria-pressed":t.holiday,disabled:!u,title:l(`holiday`),onClick:()=>e.onDays(t.dow,!t.holiday),children:l(`holiday`)}):null]}):null]}),d.text?/* @__PURE__ */ o(`div`,{className:`status${d.kind?` ${d.kind}`:``}`,role:d.kind===`error`?`alert`:void 0,title:d.text,children:d.text}):null]})}var ge=`
:host {
    display: block;
    width: 100%;
    height: 100%;
}
.mount {
    width: 100%;
    height: 100%;
    /* the size of the box does not depend on what is in it */
    container: box / size;
}
.box {
    --gap: clamp(4px, 1.8cqmin, 10px);
    --fs: clamp(11px, 3.8cqmin, 14px);
    --fs-small: clamp(9px, 3.1cqmin, 12px);
    --col-min: clamp(22px, 6.6cqmin, 42px);
    --time-height: 2.4em;
    --track: color-mix(in srgb, currentColor 9%, transparent);
    --hover: color-mix(in srgb, currentColor 14%, transparent);
    --radius: var(--iob-border-radius, 4px);
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: var(--gap);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    overflow: hidden;
    font-size: var(--fs);
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.box.edit {
    pointer-events: none;
}
.title {
    flex: none;
    font-size: clamp(12px, 4.6cqmin, 17px);
    font-weight: 600;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.main {
    flex: 1;
    min-height: 0;
    display: flex;
    gap: var(--gap);
}
.chart {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
}
.sample .chart,
.sample .days {
    opacity: 0.45;
}
.scroller {
    flex: 1;
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
}
.strip {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: max(100%, calc(var(--count) * var(--col-min)));
    display: grid;
    grid-template-columns: repeat(var(--count), minmax(0, 1fr));
    /* a sideways swipe scrolls, an up or down drag sets the value */
    touch-action: pan-x;
    /* computed here, against the box: inside an interval the container units would mean the interval */
    font-size: var(--fs-small);
}
/* intervals shorter than an hour carry minutes below them */
.strip.fine {
    --col-min: clamp(30px, 9cqmin, 44px);
}
.col {
    container: interval / inline-size;
    min-width: 0;
    display: flex;
    flex-direction: column;
}
.value {
    flex: none;
    height: 1.7em;
    line-height: 1.7em;
    padding: 0 1px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.value.on {
    color: var(--iob-success);
    font-weight: 600;
}
.value.off {
    color: var(--iob-text-secondary);
}
@container interval (max-width: 27px) {
    .value {
        padding: 0;
        font-size: 0.88em;
        letter-spacing: -0.02em;
    }
    .value .unit {
        display: none;
    }
}
.track {
    position: relative;
    flex: 1;
    min-height: 8px;
    margin: 0 1px;
    border-radius: var(--radius) var(--radius) 0 0;
    background: var(--track);
    outline: none;
}
.editable .track {
    cursor: ns-resize;
}
.editable .track:hover {
    background: var(--hover);
}
.track:focus-visible {
    box-shadow: inset 0 0 0 2px var(--iob-primary);
}
.bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--iob-primary);
    transition: height 80ms ease-out;
}
.col.selected .bar {
    background: color-mix(in srgb, var(--iob-primary) 75%, var(--iob-text));
}
.time {
    flex: none;
    box-sizing: border-box;
    height: var(--time-height);
    margin: 2px 1px 0;
    padding: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--iob-text-secondary);
    background: none;
    border: none;
    border-radius: var(--radius);
    white-space: nowrap;
    overflow: hidden;
}
.editable .time {
    cursor: pointer;
}
.editable .time:hover {
    background: var(--hover);
}
.time small {
    font-size: 0.78em;
    font-weight: 400;
    opacity: 0.8;
}
.col.current .time {
    color: inherit;
    box-shadow: inset 0 -2px 0 var(--iob-primary);
}
.col.selected .time {
    background: var(--iob-primary);
    color: var(--iob-primary-contrast);
}
.now {
    position: absolute;
    top: 0;
    bottom: calc(var(--time-height) + 2px);
    width: 0;
    margin-left: -1px;
    border-left: 2px dashed currentColor;
    opacity: 0.55;
    pointer-events: none;
}
.days {
    flex: none;
    width: clamp(40px, 13cqmin, 64px);
    display: grid;
    grid-auto-rows: minmax(0, 1fr);
    gap: clamp(2px, 1cqmin, 6px);
}
.day {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0 2px;
    font: inherit;
    font-size: var(--fs-small);
    font-weight: 600;
    color: inherit;
    background: transparent;
    border: 1px solid var(--iob-divider);
    border-radius: calc(var(--radius) * 2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.day[aria-pressed='true'] {
    background: var(--iob-primary);
    border-color: var(--iob-primary);
    color: var(--iob-primary-contrast);
}
.editable .day {
    cursor: pointer;
}
.editable .day[aria-pressed='false']:hover {
    background: var(--hover);
}
.editable .day[aria-pressed='true']:hover {
    background: color-mix(in srgb, var(--iob-primary) 85%, var(--iob-text));
}
.day:focus-visible {
    outline: 2px solid var(--iob-primary);
    outline-offset: 1px;
}
/* a narrow box: the days below the intervals, in a row */
@container box (orientation: portrait) {
    .main {
        flex-direction: column;
    }
    .days {
        width: auto;
        height: clamp(28px, 10cqmin, 40px);
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);
        grid-auto-rows: auto;
    }
}
.status {
    flex: none;
    font-size: var(--fs-small);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--iob-text-secondary);
}
.status.error {
    color: var(--iob-error);
}
.status.warning {
    color: var(--iob-warning);
}
.progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    overflow: hidden;
    background: color-mix(in srgb, var(--iob-primary) 25%, transparent);
}
.progress::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -35%;
    width: 35%;
    background: var(--iob-primary);
    animation: progress 1.2s ease-in-out infinite;
}
@keyframes progress {
    to {
        left: 100%;
    }
}
@media (prefers-reduced-motion: reduce) {
    .progress::after {
        animation: none;
        left: 0;
        width: 100%;
        opacity: 0.6;
    }
    .bar {
        transition: none;
    }
}
.hint {
    margin: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
    color: var(--iob-text-secondary);
    font-size: clamp(11px, 4.4cqmin, 15px);
}
.hint svg {
    width: clamp(18px, 10cqmin, 32px);
    height: clamp(18px, 10cqmin, 32px);
    fill: currentColor;
    opacity: 0.8;
}
`,_e=2e3,ve=8e3,ye=3,be=4e3,Z=15e3,Q=class extends Error{};function xe(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>r(new Q(`timeout`)),t);e.then(e=>{clearTimeout(i),n(e)},e=>{clearTimeout(i),r(e instanceof Error?e:Error(String(e)))})})}function $(e){return`system.adapter.${e}`}I(L,class extends F{#e;#t=null;#n=null;#r=null;#i=null;#a=null;#o=null;#s=0;#c=``;constructor(){super();let e=this.attachShadow({mode:`open`}),t=document.createElement(`style`);t.textContent=ge,this.#e=document.createElement(`div`),this.#e.className=`mount`,e.append(t,this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.#n?.phase===`pending`&&this.#m(this.#n),this.#_(),queueMicrotask(()=>{!this.isConnected&&this.#t&&(this.#t.unmount(),this.#t=null)})}getObjectIds(e){let t=V(e.profile);if(!t)return[];let n=$(t.instance),r=U(this.objects[n],t);return[n,`system.config`,r&&(r.data.type===`custom`||r.data.type===`temperature`)?r.data.members?.[0]:void 0]}getStateIds(e){let t=V(e.profile);return t?[`${$(t.instance)}.alive`]:[]}render(){this.isConnected&&(this.#t||=e(this.#e),this.#t.render(this.#u()))}#l=e=>ee(this.systemLang,e);#u(){let e=this.settings,t=this.#l,n=V(e.profile);if(!n)return this.editMode?this.#d():/* @__PURE__ */ o(Y,{text:t(`chooseProfile`),editMode:!1});let r=this.objects[$(n.instance)];if(r===void 0)return/* @__PURE__ */ o(`div`,{className:`box`});if(!r)return/* @__PURE__ */ o(Y,{text:`${t(`noInstance`)}: ${n.instance}`,editMode:this.editMode});let i=U(r,n);if(!i)return/* @__PURE__ */ o(Y,{text:t(`notProfile`),editMode:this.editMode});let a=`${n.instance}/${i.id}`,s=this.#n?.key===a?this.#n:null;s?.phase===`sent`&&(G(i.data,s.change)||Date.now()-s.sentAt>=Z)&&(this.#n=null,s=null);let c=this.states[`${$(n.instance)}.alive`],l=c===void 0||!!c?.val;this.#p(l);let u=!!s&&s.phase!==`sent`,d={saving:u&&l,text:``,kind:``};this.#c?(d.text=`${t(`notSaved`)}: ${this.#c}`,d.kind=`error`):l||(d.text=u?`${t(`notRunning`)} - ${t(`waiting`)}`:t(`notRunning`),d.kind=`warning`);let f={...W(i.data),...s?.change},p=i.data.members?.[0],m=this.objects[`system.config`];return/* @__PURE__ */ o(X,{title:e.title||``,profile:f,range:K(f.type,p?this.objects[p]:null),showDow:!e.hideDow,holidayVisible:!!r.native?.holidayId,mondayFirst:m?.common?.firstDayOfWeek!==`sunday`,editable:!this.editMode&&!e.readOnly&&!!this.socket,editMode:this.editMode,status:d,lang:this.systemLang,word:t,onIntervals:e=>this.#f(n,i,{intervals:e}),onDays:(e,t)=>this.#f(n,i,{dow:e,holiday:t})},a)}#d(){return/* @__PURE__ */ o(X,{sample:!0,title:this.settings.title||``,profile:J,range:K(J.type,null),showDow:!this.settings.hideDow,holidayVisible:!1,mondayFirst:!0,editable:!1,editMode:this.editMode,status:{saving:!1,text:this.#l(`chooseProfile`),kind:``},lang:this.systemLang,word:this.#l,onIntervals:()=>void 0,onDays:()=>void 0},`sample`)}#f(e,t,n){if(this.editMode||this.settings.readOnly)return;let r=`${e.instance}/${t.id}`,i=this.#n;i&&i.key!==r&&i.phase===`pending`&&this.#m(i);let a=i?.key===r?i.change:ie(t.data);this.#n={key:r,instance:e.instance,profileId:t.id,change:{...a,...n},phase:`pending`,sentAt:0},this.#c=``,this.#s=0,this.#a&&=(clearTimeout(this.#a),null),this.#i&&clearTimeout(this.#i),this.#i=setTimeout(()=>{this.#i=null,this.render()},_e),this.render()}#p(e){let t=this.#n;t?.phase===`pending`&&e&&!this.#i&&!this.#a&&!this.#r&&this.socket&&!this.editMode&&this.#m(t)}#m(e){let t=this.socket;t&&!this.editMode&&(e.phase=`sending`,this.#r=e,xe(t.sendTo(e.instance,R,{id:e.profileId,...e.change}),ve).then(t=>{if(t?.error)throw Error(String(t.error));this.#h(e)}).catch(t=>this.#g(e,t)).finally(()=>{this.#r===e&&(this.#r=null),this.render()}))}#h(e){this.#s=0,this.#c=``,this.#n===e&&(e.phase=`sent`,e.sentAt=Date.now(),this.#o&&clearTimeout(this.#o),this.#o=setTimeout(()=>{this.#o=null,this.render()},Z))}#g(e,t){if(this.#n!==e)return;let n=re(this.objects[$(e.instance)],e.profileId);n&&G(n.data,e.change)?this.#h(e):t instanceof Q&&++this.#s<ye?(e.phase=`pending`,this.#a=setTimeout(()=>{this.#a=null,this.render()},be)):(this.#s=0,this.#c=t instanceof Q?this.#l(`noAnswer`):t.message||String(t),console.warn(`<${L}>: cannot save the profile ${e.profileId} of ${e.instance}: ${this.#c}`),this.#n=null)}#_(){for(let e of[this.#i,this.#a,this.#o])e&&clearTimeout(e);this.#i=null,this.#a=null,this.#o=null}});