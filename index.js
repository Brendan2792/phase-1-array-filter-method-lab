const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string){
    return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(element => element.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string){
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
      return array.filter(obj => obj.name === string)
}