export const getGoogleSpreadsheetsUrl = (spreadsheetsDataType, spreadsheetsPublishURL, spreadsheetsID) => {
  switch (spreadsheetsDataType) {
    case 'html':
      return spreadsheetsPublishURL;
    case 'json':
      return `https://docs.google.com/spreadsheets/d/${spreadsheetsID}/gviz/tq`;
  }
};

export const parseGoogleSpreadsheets = (dataType, data) => {
  switch (dataType) {
    case 'html':
      return parseHTML(data);
    case 'json':
      return parseJSON(data);
  }
};

export const parseHTML = (htmlString) => {
  let doc = new DOMParser().parseFromString(htmlString, 'text/html');
  let rows = doc.querySelectorAll('tbody tr');
  let list = [];

  for (let idx = 0, len = rows.length; idx < len; idx++) {
    let cols = rows[idx].querySelectorAll('td');
    for (let i = 0, l = cols.length; i < l; i++) {
      list.push(cols[i].textContent);
    }
  }

  return list.join(' ');
};

export const parseJSON = (jsonString) => {
  let str = jsonString
    .replace(/\/.*\//, '')
    .replace(/google.visualization.Query.setResponse\(/, '')
    .replace(/\);$/, '');
  let data = JSON.parse(str);
  let rows = data.table.rows;
  let list = [];

  for (let index = 0, length = rows.length; index < length; index++) {
    let row = Object.values(rows[index]);
    for (let idx = 0, len = row.length; idx < len; idx++) {
      let cols = row[idx];
      for (let i = 0, l = cols.length; i < l; i++) {
        list.push(cols[i]['v']);
      }
    }
  }

  return list.join(' ');
};
