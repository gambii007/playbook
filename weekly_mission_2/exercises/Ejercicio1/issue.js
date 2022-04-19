const issue = {
  title: 'Objetos',
  repositoryNameAssociated: 'Ejercicio 1',
  status: 'ON',
  numberOfComments: '4',
  labels: '2',
  autor: 'FGR',
  dateCreated: '17/04/2022',
  lastUpdated: '18/04/2022',

  getTitleAndAutor: function(){
    return `
    Title: ${this.title}, Autor: ${this.autor}
    `
  },

  getGeneralInfo: function(){
    return `
    Name-Repository: ${this.repositoryNameAssociated},
    Status: ${this.status}
    Last Update ${this.lastUpdated}`
  }
}

//console.log(issue);
//console.log("Name: "+ issue.title);
console.log(issue.getTitleAndAutor());
console.log(issue.getGeneralInfo());
