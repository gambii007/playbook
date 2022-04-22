const git = {
  name: 'LaunchX',
  author: 'FGR',
  language: 'JS',
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  issue: {
    title: 'Objetos',
    repositoryNameAssociated: 'Ejercicio 1',
    status: 'ON',
    numberOfComments: '4',
    labels: '2',
    autor: 'FGR',
    dateCreated: '22/04/22',
    lastUpdated: '18/04/22',
    pullRequest: {
      title:'Pull 1',
      branchName: 'Main',
      dateCreated: '18/04/22',
      status: 'ON',
      repositoryNameAssociated: 'Ejercicio 1',
      Pull: function(){
        return `
        Title: ${this.title}
        Branch: ${this.branchName}
        Date ${this.dateCreated}
        Status: ${this.status}`
      }
    }
  }
}

console.log("Corriendo Github");

console.log(`Repo: ${git.name}
  Autor: ${git.autor}
  LastUpdated: ${git.issue.lastUpdated}`);

console.log("\nRealizando pull" +
git.issue.pullRequest.Pull());
