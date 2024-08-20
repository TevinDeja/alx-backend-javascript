const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      const filelines = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const indexfn = header.findIndex((elem) => elem === 'firstname');
      const indexfd = header.findIndex((elem) => elem === 'field');
      const fields = {};
      const students = {};
      const all = {};

      filelines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indexfd]]) fields[list[indexfd]] = 0;
        fields[list[indexfd]] += 1;
        if (!students[list[indexfd]]) students[list[indexfd]] = '';
        students[list[indexfd]] += students[list[indexfd]]
          ? `, ${list[indexfn]}`
          : list[indexfn];
      });
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          all[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      return resolve(all);
    });
  });
};
