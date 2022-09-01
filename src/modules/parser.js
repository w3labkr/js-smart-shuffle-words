export const parseGoogleSpreadsheets = (htmlString) => {
  let doc = new DOMParser().parseFromString(htmlString, 'text/html');
  let rows = doc.querySelectorAll('tbody tr');
  let list = [];

  for (let idx = 0, len = rows.length; idx < len; idx++) {
    let cols = rows[idx].querySelectorAll('td');
    for (let i = 0, l = cols.length; i < l; i++) {
      list.push(cols[i].textContent);
    }
  }

  return list;
};
