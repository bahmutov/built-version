#!/usr/bin/env node

const program = require('commander')
const ggit = require('ggit')
const latest = require('latest-version-or-tag')
const la = require('lazy-ass')
const is = require('check-more-types')
const R = require('ramda')

program
  .option('-f, --file <filename>', 'output JSON filename')
  .parse(process.argv)

la(is.unemptyString(program.file), 'missing --file option')

const getSha = ggit.lastCommitId()
const getVersion = latest()

const stringify = data => JSON.stringify(data, null, 2) + '\n'

function save (sha, version) {
  la(is.commitId(sha), 'invalid git commit', sha)
  la(is.unemptyString(version), 'invalid version', version)
  console.log('sha %s version %s', sha, version)
  const data = {
    id: sha,
    version
  }
  const write = require('fs').writeFileSync
  const contents = stringify(data)
  write(program.file, contents, 'utf8')
  console.log('saved built version into file %s', program.file)
}

Promise.all([getSha, getVersion])
  .then(R.apply(save))
  .catch(console.error)

