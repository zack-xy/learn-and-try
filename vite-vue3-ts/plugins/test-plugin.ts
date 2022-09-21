/* eslint-disable no-console */
export default (enforce?: 'pre' | 'post') => {
  return {
    name: 'test',

    enforce,

    buildStart() {
      console.log('buildStart', enforce)
    },

    // resolveId() {
    //   console.log('resolveId', enforce)
    // },

    load() {
      console.log('load', enforce)
    },
  }
}
