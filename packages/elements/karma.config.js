#!/usr/bin/env node
const path = require('path');
const karmaConfig = require('../../karma.config');
const { extractConfig } = require('../../scripts/karma');
const { ELEMENTS_ROOT, MONOREPO_ELEMENTS, checkElement } = require('./scripts/helpers');

const ELEMENT = process.env.ELEMENT;
const testAll = ELEMENT === 'all' || ELEMENT === undefined;

module.exports = async function (config) {
  const elementsConfig = await extractConfig(karmaConfig);

  // Must be resolved from root point of view
  elementsConfig.files = [
    {
      pattern: path.join(ELEMENTS_ROOT, 'src', `${ testAll ? '*' : ELEMENT }/__snapshots__/**/*.md`),
      type: 'js'
    }, {
      pattern: path.join(ELEMENTS_ROOT, 'src', `${ testAll ? '*' : ELEMENT }/__test__/**/*.test.js`),
      type: 'module'
    }
  ];

  const coverageExclude = [...elementsConfig.esm.coverageExclude];
  !testAll && coverageExclude.push(`!**/${ELEMENT}/**/*`);

  elementsConfig.esm.coverageExclude = coverageExclude;
  elementsConfig.snapshot.pathResolver = (basePath, suiteName) => {
    const split = suiteName.split('/');
    const element = split.shift();
    const suite = split.join('/');

    if (!element || !suite) {
      throw(new Error(`${suiteName}: cannot resolve snapshots. Test suite name must follow the pattern: \`describe('element-name/suite-name', () => {})\``));
    }

    if (!checkElement(element)) {
      throw(new Error(`${suiteName}: element name must match test suite name. Element '${element}' does not exist.`));
    }

    return path.join(basePath, MONOREPO_ELEMENTS, 'src', element, '__snapshots__', `${suite}.md`);
  };

  config.set(elementsConfig);
};