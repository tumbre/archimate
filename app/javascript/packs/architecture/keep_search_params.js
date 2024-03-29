document.addEventListener('turbolinks:load', () => {

  // フリーワード検索欄の入力状態を保持・復元
  const searchField = document.getElementById('search-field');
  const initialSearchFieldValue = searchField ? searchField.value : '';
  if (searchField) {
    const storedSearchFieldValue = getStoredQueryParam('keyword', initialSearchFieldValue);
    searchField.value = storedSearchFieldValue;

    searchField.addEventListener('input', () => {
      const searchFieldValue = searchField.value;
      updateQueryParam('keyword', searchFieldValue);
    });

    searchField.addEventListener('change', () => {
      const searchFieldValue = searchField.value;
      if (!searchFieldValue) {
        removeQueryParam('keyword');
      }
    });
  }

  // 都道府県セレクトボックスの入力状態を保持・復元
  const prefSelect = document.getElementById('pref-select');
  const initialPrefSelectValue = prefSelect ? prefSelect.value : '';
  if (prefSelect) {
    const storedPrefSelectValue = getStoredQueryParam('pref', initialPrefSelectValue);
    prefSelect.value = storedPrefSelectValue;

    prefSelect.addEventListener('change', () => {
      const prefSelectValue = prefSelect.value;
      updateQueryParam('pref', prefSelectValue);
    });

    prefSelect.addEventListener('change', () => {
      const prefSelectValue = prefSelect.value;
      if (!prefSelectValue) {
        removeQueryParam('pref');
      }
    });
  }
  
  // フォームが送信されたときに 'page' パラメータを削除
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', () => {
      removeQueryParam('page');
    });
  }

  // クエリパラメータを更新する関数
  function updateQueryParam(paramName, paramValue) {
    const newUrlParams = new URLSearchParams(window.location.search);
    if (Array.isArray(paramValue)) {
      newUrlParams.delete(paramName); // 既存の同名パラメータを削除
      paramValue.forEach(value => {
        newUrlParams.append(paramName, value); // 配列の要素を追加
      });
    } else {
      newUrlParams.set(paramName, paramValue); // パラメータを設定
    }
    // ページの URL を更新
    history.replaceState(null, null, `?${newUrlParams.toString()}`);
  }

  // クエリパラメータを削除する関数
  function removeQueryParam(paramName) {
    const newUrlParams = new URLSearchParams(window.location.search);
    newUrlParams.delete(paramName);
    // ページの URL を更新
    history.replaceState(null, null, `?${newUrlParams.toString()}`);
  }

  // クエリパラメータを取得し、指定したパラメータ名の値を返す関数
  function getStoredQueryParam(paramName, defaultValue) {
    const urlParams = new URLSearchParams(window.location.search);
    const storedValue = urlParams.get(paramName);
    return storedValue !== null ? storedValue : defaultValue;
  }
});
