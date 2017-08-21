import React, { Component } from 'react'
import Chance from 'chance';

class NewBugForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      severity: '',
      assignedTo: ''
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSeverityChange = this.handleSeverityChange.bind(this)
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSeverityChange(event) {
    this.setState({ severity: event.target.value })
  }

  handleAssignedToChange(event) {
    this.setState({ assignedTo: event.target.value })
  }

  handleSubmit(event) {
    // alert(`You Said ${ this.state.value }`)
    event.preventDefault()
    let bugs = []
    let bug = {
      id: new Chance().guid(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: true
    }

    if(localStorage.getItem('bugs')) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)

    localStorage.setItem('bugs', JSON.stringify(bugs))

    fetchBugs()
  }




  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>
          Description:
          <input type="text" value={ this.state.description } onChange={ this.handleDescriptionChange }/>
        </label>
        <label>
          Severity:
          <input type="text" value={ this.state.severity } onChange={ this.handleSeverityChange }/>
        </label>
        <label>
          Assigned To:
          <input type="text" value={ this.state.assignedTo } onChange={ this.handleAssignedToChange }/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

let fetchBugs = () => {
  let bugs = JSON.parse(localStorage.getItem('bugs')) || []
  let listBugsElement = document.getElementById('listBugs')

  listBugsElement.innerHTML = ''

  for(let i = 0; i < bugs.length; i++) {
    let id = bugs[i].id
    let desc = bugs[i].description
    let severity = bugs[i].severity
    let assignedTo = bugs[i].assignedTo
    let status = bugs[i].status

    listBugsElement.innerHTML += `<div class="card">
      <header class="card-header">
        <p class="card-header-title">
        BugId: ${id}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          ${desc}
          <span class="tag is-info">${severity}</span>
          <p>Assigned To: ${assignedTo}</p>
        </div>
        <br>
        <small class="tag is-primary">${status}</small>
      </div>
      <footer class="card-footer">
        <a onclick="setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
        <a class="card-footer-item" onclick="deleteBug('${id}')">Delete</a>
      </footer>
    </div>
      <br>`
  }
}

export default NewBugForm
