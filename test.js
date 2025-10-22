/**
 * @typedef {Object} Stat
 * @property {string} name
 * @property {string} [description]
 * @property {number} [total]
 * @property {(Stat[]|Object.<string, number>)} values
 */

/** * @typedef {Object} StatGroup * @property {string} name * @property {string} description * @property {Stat[]} [stats] * @property {number} total */
/**
 * @type {Stat[]}
 */
let a = [
   {
      name: 'Issues',
      total: 0,
      values: [
         {
            name: 'Open issues by',
            description: 'Amount of open issues by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Closed issues by',
            description: 'Amount of closed issues by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Issues by',
            description: 'Total amount of issues created by a user',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Issues closed by',
            description: 'Amount of issues closed by a user',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Time to close issues',
            description: 'Time taken to close each issue',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Closed by author',
            description: 'Amount of issues closed by the author',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Labels used in issues',
            description: 'Amount of each label used in an issue',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }
      ]
   }, {
      name: 'Pull Requests',
      description: 'Pull requests',
      total: 0,
      values: [
         {
            name: 'Open pull requests by',
            description: 'Amount of open pull requests by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Closed pull requests by',
            description: 'Amount of closed pull requests by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Merged pull requests by',
            description: 'Amount of merged pull requests by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Pull requests by',
            description: 'Total amount of pull requests created by a user',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Pull requests closed by',
            description: 'Amount of pull requests closed by a user',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Pull requests merged by',
            description: 'Amount of pull requests merged by a user',
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Closed by author',
            description: 'Amount of pull requests closed by the author',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Merged by author',
            description: 'Amount of pull requests merged by the author',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Labels used in pull requests',
            description: 'Amount of each label used in a pull request',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }
      ]
   }, {
      name: 'Commits',
      description: 'Commits by each user',
      total: 0,
      values: {
         min: 0,
         max: 0,
         mean: 0,
         median: 0,
      }
   }, {
      name: 'Changes',
      description: 'Changes by each user',
      total: 0,
      values: [
         {
            name: 'Additions',
            description: 'Amount of additions by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Deletions',
            description: 'Amount of deletions by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Changes',
            description: 'Total amount of changes by a user',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }, {
            name: 'Net changes',
            description: 'Net amount of changes by a user (additions - deletions)',
            total: 0,
            values: {
               min: 0,
               max: 0,
               mean: 0,
               median: 0,
            }
         }
      ]
   }
];
