import Dexie from 'dexie';

const db = new Dexie('ParametronDB');
db.version(1).stores({
  modules: '++id, name, description, parameters, updated',
  projects: '++id, name, description, modules, updated',
});
db.open();

export default db;
