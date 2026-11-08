'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const {
  calculateMatchScore,
} = require('../src/server/src/modules/matching/match-score.js');

// тест 1 звичайний
test('normal case: matching lost and found items return high score', () => {
  const lost = { title: 'Чорний рюкзак з книгами', category: 'other', location: 50.45 };
  const found = { title: 'Знайшов чорний рюкзак', category: 'other', location: 50.46 };

  const score = calculateMatchScore(lost, found);

  assert.ok(score >= 999, `Очікували score >= 999, отримали ${score}`);
});

// тест 2 граничний
test('edge case: missing listing throws an error', () => {
  const found = { title: 'Ключі', category: 'keys', location: 50.4 };

  assert.throws(
    () => calculateMatchScore(null, found),
    /required/,
    'Функція має викинути помилку, якщо одне з оголошень відсутнє',
  );
});