const pullRequest = {
  title: 'Pull 1',
  branchName: 'Main',
  dateCreated: '18/04/2022',
  status: 'ON',
  repositoryNameAssociated: 'Ejercicio 1',
  autor: 'FGR',
  getStatus: function(){
    return `
    Status: ${this.status}
    `
  },
  getTitleAndAutor: function(){
    return `
    Title: ${this.title},
    Autor: ${this.autor}
    `
  }
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());
