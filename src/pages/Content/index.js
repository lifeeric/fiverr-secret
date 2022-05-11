console.log(
  '[Fiverr Secret by https://ericgit.me] please report if you found any problem!'
);

let blacklist = 0;

const waitForElm = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

const DOMMunipulation = async () => {
  let fiverrRequestsTable = await waitForElm('table');
  fiverrRequestsTable = await fiverrRequestsTable.getElementsByTagName(
    'tbody'
  )[0];
  fiverrRequestsTable = await fiverrRequestsTable.getElementsByTagName('tr');

  setTimeout(() => {
    for (blacklist; blacklist < fiverrRequestsTable.length; ++blacklist) {
      const item = fiverrRequestsTable[blacklist];
      const userData = item.querySelector(
        '.btn-standard.btn-green-grad.js-send-offer'
      );

      const username = JSON.parse(userData?.dataset?.meta || '{}');

      if (username?.username) {
        const a = document.createElement('a');
        const linkText = document.createTextNode(username?.username);
        a.appendChild(linkText);
        a.title = username?.username;
        a.href = 'https://www.fiverr.com/users/' + username.username;
        a.target = '_blank';
        a.style.marginTop = '20px';
        const dateEle = item.querySelector('.date');
        dateEle.style.display = 'flex';
        dateEle.style.flexDirection = 'column';

        dateEle.appendChild(a);
      }
    }
  }, 3000);
};

window.addEventListener('load', async (event) => {
  DOMMunipulation();

  const loadMoreBtn = await waitForElm('.db-load-more');

  loadMoreBtn.addEventListener('click', function () {
    let loading;
    loading = setInterval(async () => {
      let fiverrRequestsTable = await waitForElm('table');
      fiverrRequestsTable = await fiverrRequestsTable.getElementsByTagName(
        'tbody'
      )[0];
      fiverrRequestsTable = await fiverrRequestsTable.getElementsByTagName(
        'tr'
      );

      if (fiverrRequestsTable.length > blacklist) {
        DOMMunipulation();
        clearInterval(loading);
      }
    }, 1000);
  });
});
