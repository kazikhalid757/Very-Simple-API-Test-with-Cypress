it('Create User', () => {
  cy.request('POST', 'https://reqres.in/api/users', {
    name: 'John',
    job: 'Developer'
  }).then((response) => {
    expect(response.status).to.eq(201); // Ensure the response status is 201 (Created)
    expect(response.body).to.have.property('name', 'John'); // Validate the response data
  });
});

it('Get User', () => {
  cy.request('GET', 'https://reqres.in/api/users/1').then((response) => {
    expect(response.status).to.eq(200); // Ensure the response status is 200 (OK)
    expect(response.body.data).to.have.property('id', 1); // Validate the response data
  });
});

it('Update User', () => {
  cy.request('PUT', 'https://reqres.in/api/users/1', {
    name: 'UpdatedName',
    job: 'UpdatedJob'
  }).then((response) => {
    expect(response.status).to.eq(200); // Ensure the response status is 200 (OK)
    expect(response.body).to.have.property('name', 'UpdatedName'); // Validate the updated data
  });
});

it('Delete User', () => {
  cy.request('DELETE', 'https://reqres.in/api/users/1').then((response) => {
    expect(response.status).to.eq(204); // Ensure the response status is 204 (No Content) on successful deletion
  });
});

it('List Users', () => {
  cy.request('GET', 'https://reqres.in/api/users').then((response) => {
    expect(response.status).to.eq(200); // Ensure the response status is 200 (OK)
    expect(response.body.data).to.be.an('array'); // Validate that the response is an array of users
  });
});
